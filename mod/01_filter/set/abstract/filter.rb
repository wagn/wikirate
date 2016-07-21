include_set Type::SearchType
include_set Abstract::Utility
include_set Abstract::FilterUtility
def sort?
  true
end

def shift_sort_table?
  return false if Env.params["sort"] == "name"
  true
end

def default_sort_by_key
  "metric"
end

def default_keys
  %w(metric designer wikirate_topic project year)
end

def advance_keys
  []
end

def params_keys
  default_keys + advance_keys
end

def target_type_id
  WikirateCompanyID
end

def get_query params={}
  filter = fetch_params params_keys
  search_args = search_wql target_type_id, filter, params_keys
  sort_by search_args, Env.params["sort"] if sort?
  params[:query] = search_args
  super(params)
end

# the default sort will take the first table in the join
# I need to override to shift the sort table to the next one
def item_cards params={}
  s = query(params)
  raise("OH NO.. no limit") unless s[:limit]
  query = Query.new(s, comment)
  shift_sort_table query
  query.run
end

def shift_sort_table query
  if sort? && shift_sort_table?
    # sort table alias always stick to the first table,
    # but I need the next table
    sort = query.mods[:sort].scan(/c([\d+]).db_content/).last.first.to_i + 1
    query.mods[:sort] = "c#{sort}.db_content"
  end
end

def sort_by wql, sort_by
  if sort_by == "name"
    wql[:sort] = "name"
  else
    wql[:sort_as] = "integer"
    wql[:dir] = "desc"
    wql[:sort] = {
      right: (sort_by || default_sort_by_key), right_plus: "*cached count"
    }
  end
end

def virtual?
  true
end

def raw_content
  %({ "name":"dummy" })
end

format :html do
  def industry_metric_name
    "Global Reporting Initiative+Sector Industry"
  end

  def industry_value_year
    "2015"
  end

  def page_link_params
    [:sort] + card.params_keys
  end

  def append_formgroup array
    array.map do |key|
      "#{key}_formgroup".to_sym
    end
  end

  def default_filter_form_args args
    args[:formgroups] =
      append_formgroup(card.default_keys).unshift(:sort_formgroup)
    args[:advance_formgroups] = append_formgroup(card.advance_keys)
  end

  def default_sort_formgroup_args args
    args[:sort_options] = {
      "Alphabetical" => "name"
    }
  end

  view :no_search_results do |_args|
    %(
      <div class="search-no-results">
        No result
      </div>
    )
  end

  def filter_active?
    Env.params.keys.any? do |key|
      card.advance_keys.include?(key) && Env.params[key].present?
    end
  end

  def wrap_as_collapse title
    <<-HTML
     <div class="panel panel-default filter">
      <div class="panel-heading" role="tab" id="headingOne"  data-toggle="collapse" href="#collapseFilter" aria-expanded="true" aria-controls="collapseFilter">
        <h4 class="panel-title accordion-toggle">
            #{title}
        </h4>
      </div>
      <div id="collapseFilter" class="panel-collapse collapse #{'in' if filter_active?}">
        #{yield}
      </div>
    </div>
    HTML
  end

  def default_button_formgroup_args args
    args[:buttons] =
      card_link(card.left, text: "Reset",
                           class: "slotter btn btn-default margin-8")
  end

  view :filter_form do |args|
    formgroups = args[:formgroups] || [:name_formgroup]
    advance_formgroups = args[:advance_formgroups]
    html = formgroups.map { |fg| optional_render(fg, args) }
    adv_html = ""
    if advance_formgroups
      adv_html = wrap_as_collapse("Advance") do
        advance_formgroups.map { |fg| optional_render(fg, args) }.join("")
      end
    end
    content = output(html) + adv_html.html_safe
    action = card.left.name
    <<-HTML
      <form action="/#{action}" method="GET">
        #{content}
        #{_optional_render :button_formgroup, args}
      </form>
    HTML
  end

  # it was from filter_search.rb
  # the filter args need to be included in the page link args
  # otherwise it will lose the filter condition while changing pages
  def page_link text, page, _current=false, options={}
    @paging_path_args[:offset] = page * @paging_limit
    filter_args = {}
    page_link_params.each do |key|
      filter_args[key] = params[key] if params[key].present?
    end
    options[:class] = "card-paging-link slotter"
    options[:remote] = true
    link_to raw(text), path(@paging_path_args.merge(filter_args)), options
  end

  def text_filter type_name, args
    formgroup args[:title] || type_name.capitalize,
              text_field_tag(type_name, params[type_name],
                             class: "form-control"),
              class: " filter-input"
  end

  def type_options type_codename, order="asc"
    type_card = Card[type_codename]
    Card.search type_id: type_card.id, return: :name, sort: "name", dir: order
  end

  def select_filter type_codename, order, label=nil
    # take the card name as default label
    label ||= Card[type_codename].name
    options = type_options type_codename, order
    options.unshift(["--", ""])
    simple_select_filter type_codename.to_s, options, Env.params[type_codename],
                         label
  end

  def simple_select_filter type_name, options, default, label=nil
    options = options_for_select(options, default)
    label ||= type_name.capitalize
    formgroup label, select_tag(type_name, options, class: "pointer-select"),
              class: "filter-input "
  end

  def simple_multiselect_filter type_name, options, default, label=nil
    options = options_for_select(options, default)
    label ||= type_name.capitalize
    multiselect_tag = select_tag(type_name, options,
                                 multiple: true,
                                 class: "pointer-multiselect")
    formgroup(label, multiselect_tag, class: "filter-input #{type_name}")
  end

  def multiselect_filter type_codename, label=nil
    options = type_options type_codename, "asc"
    label ||= type_codename.to_s
    simple_multiselect_filter type_codename.to_s, options,
                              Env.params[type_codename], label
  end

  view :name_formgroup do |args|
    name = args[:name] || "name"
    text_filter name, title: "Keyword"
  end

  view :project_formgroup do
    select_filter :project, "asc"
  end

  view :year_formgroup do
    select_filter :year, "desc"
  end

  view :wikirate_topic_formgroup do
    select_filter :wikirate_topic, "asc"
  end

  view :metric_formgroup do
    select_filter :metric, "asc"
  end

  view :wikirate_company_formgroup do
    select_filter :wikirate_company, "asc"
  end

  view :metric_value_formgroup do
    options = {
      "Exists" => "exists",
      "None" => "none",
      "Edited in last hour" => "last_hour",
      "Edited today" => "today",
      "Edited this week" => "week",
      "Edited this month" => "month"
    }
    simple_select_filter "value", options, (Env.params["value"] || "exists")
  end

  view :designer_formgroup do
    metrics = Card.search type_id: MetricID, return: :name
    designers = metrics.map do |m|
      names = m.to_name.parts
      # score metric?
      names.length == 3 ? names[2] : names[0]
    end.uniq!(&:downcase).sort_by!(&:downcase)
    simple_select_filter "designer", [["--", ""]] + designers,
                         Env.params[:designer]
  end

  view :industry_formgroup do
    industries = Card[industry_metric_name].value_options
    simple_select_filter "industry", [["--", ""]] + industries,
                         Env.params[:industry]
  end

  view :sort_formgroup do |args|
    options = args[:sort_options] || {}
    sort_param = Env.params[:sort] || args[:sort_option_default]
    simple_select_filter "sort", options_for_select(options, sort_param),
                         class: "filter-input"
  end
end
