include_set Type::SearchType

def virtual?
  true
end

def raw_content
  %(
    {
      "left":{
        "type":"metric_value",
        "left":{
          "left":"_left"
        }
      },
      "right":"value",
      "limit":0
    }
  )
end

def sort_params
  [
    (Env.params['sort_by'] || 'value'),
    (Env.params['sort_order'] || 'desc')
  ]
end

def get_params key, default
  if (value = Env.params[key])
    value.to_i
  else
    default
  end
end

def query params={}
  default_query = params.delete :default_query
  @query = super params
  unless default_query
    @query[:limit] = params[:default_limit] || 20
    @query[:offset] = get_params('offset', 0)
  end
  @query
end

# @return [Hash] all companies with year and values
#  format: { <company name> => { :year =>  , :value => }}
def cached_values
  @cached_metric_values ||= get_cached_values
end

def get_cached_values
  cached_json = fetch(trait: :cached_count, new: {}).format.render_raw
  JSON.parse(cached_json).with_indifferent_access || {}
end

# @return # of companies with values
def count _params={}
  cached_values.size
end

format do
  def page_link text, page, _current=false, options={}
    @paging_path_args[:offset] = page * @paging_limit
    options.merge!(class: 'card-paging-link slotter', remote: true)
    sort_by, sort_order = card.sort_params
    paging_args = @paging_path_args.merge(sort_by: sort_by,
                                          sort_order: sort_order)
    link_to raw(text), path(paging_args), options
  end

  def compare_content value_a, value_b, is_num
    if is_num
      BigDecimal.new(value_a) - BigDecimal.new(value_b)
    else
      value_a <=> value_b
    end
  end

  def sort_value_asc metric_values, is_num
    metric_values.sort do |x, y|
      value_a = x[1].sort_by { |value| value['year'] }.reverse[0]['value']
      value_b = y[1].sort_by { |value| value['year'] }.reverse[0]['value']
      compare_content value_a, value_b, is_num
    end
  end

  def sort_name_asc metric_values
    metric_values.sort do |x, y|
      x[0].downcase <=> y[0].downcase
    end
  end

  def offset
    card.get_params('offset', 0)
  end

  def limit
    card.query(search_params)[:limit]
  end

  def sorted_result sort_by, order, is_num
    sorted = case sort_by
             when "company_name"
               sort_name_asc card.cached_values
             when "value"
               sort_value_asc card.cached_values, is_num
             end
    return sorted if order == 'asc'
    sorted.reverse
  end

  def num?
    metric_value_type = Card["#{card.cardname.left}+value type"]
    type = metric_value_type.nil? ? '' : metric_value_type.item_names[0]
    type == 'Number' || type == 'Money'
  end

  def search_results _args={}
    @search_results ||= begin
      sort_by, sort_order = card.sort_params
      all_results = sorted_result sort_by, sort_order, num?
      results = all_results[offset, limit]
      results.blank? ? [] : results
    end
  end
end

format :html do
  def sort_icon_by_state state
    order = state.empty? ? '' : "-#{state}"
    %(<i class="fa fa-sort#{order}"></i>)
  end

  def toggle_sort_order order
    order == 'asc' ? 'desc' : 'asc'
  end

  def sort_order sort_by, sort_order
    if sort_by == 'company_name'
      [toggle_sort_order(sort_order), 'asc']
    else
      ['asc', toggle_sort_order(sort_order)]
    end
  end

  def sort_icon sort_by, sort_order
    if sort_by == 'company_name'
      [sort_icon_by_state(sort_order), sort_icon_by_state('')]
    else
      [sort_icon_by_state(''), sort_icon_by_state(sort_order)]
    end
  end

  # @param [String] text link text
  # @param [Hash] args sort args
  # @option args [String] :sort_by
  # @option args [String] :order
  # @option args [String] :class additional css class
  def sort_link text, args
    url = path item: 'content', offset: offset, limit: limit,
               sort_order: args[:order], sort_by: args[:sort_by]
    link_to text, url, class: "metric-list-header slotter #{args[:class]}",
                       'data-remote' => true
  end

  view :card_list_header do |args|
    sort_by, sort_order = card.sort_params
    company_sort_order, value_sort_order = sort_order sort_by, sort_order
    company_sort_icon, value_sort_icon = sort_icon sort_by, sort_order
    %(
      <div class='yinyang-row column-header'>
        <div class='company-item value-item'>
          #{sort_link "Companies #{company_sort_icon}",
                      sort_by: 'company_name', order: company_sort_order,
                      class: 'header'}
          #{sort_link "Values #{value_sort_icon}",
                      sort_by: 'value', order: value_sort_order,
                      class: 'data'}
        </div>
      </div>
    )
  end

  view :card_list_item do |args|
    c = args[:item_card]
    item_view = args[:item] || nest_defaults(c)[:view]
    %(
      <div class="search-result-item item-#{item_view}">
        #{nest(c, size: args[:size], view: item_view)}
      </div>
    )
  end

  view :card_list_items do |args|
    search_results.map do |row|
      c = Card["#{card.cardname.left}+#{row[0]}"]
      render :card_list_item, args.clone.merge(item_card: c)
    end.join "\n"
  end

  view :card_list do |args|
    paging = _optional_render :paging, args
    if search_results.blank?
      render_no_search_results(args)
    else
      results = render :card_list_items, args
      header = render :card_list_header, args
      %(
        #{paging}
        #{header}
        <div class="search-result-list">
          #{results}
        </div>
        #{paging if search_results.length > 10}
      )
    end
  end
end
