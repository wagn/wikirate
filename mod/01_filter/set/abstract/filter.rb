include_set Type::SearchType
include_set Abstract::Utility
ensure_set { Abstract::FilterUtility }
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

def advanced_keys
  []
end

# gather all the params keys from default and advanced
def params_keys
  default_keys + advanced_keys
end

def target_type_id
  WikirateCompanyID
end

# FIXME: HAAAAAAAAACK!
def get_query params={}
  filter = fetch_params params_keys
  search_args = search_wql target_type_id, filter, params_keys
  sort_by search_args, Env.params["sort"] if sort?
  params[:query] = search_args
  super(params)
end

# FIXME: HAAAAAAAAACK!
# the default sort will take the first table in the join
# I need to override to shift the sort table to the next one
def item_cards params={}
  s = query(params)
  raise("OH NO.. no limit") unless s[:limit]
  query = Query.new(s, comment)
  shift_sort_table query
  query.run
end

# FIXME: HAAAAAAAAACK!
def shift_sort_table query
  if sort? && shift_sort_table?
    # sort table alias always stick to the first table,
    # but I need the next table
    sort = query.mods[:sort].scan(/c(\d+).db_content/).last.first.to_i + 1
    query.mods[:sort] = "c#{sort}.db_content"
  end
end

# FIXME: HAAAAAAAAACK!
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
  def view_caching?
    false
  end

  def page_link_params
    [:sort] + card.params_keys
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
      card.advanced_keys.include?(key) && Env.params[key].present?
    end
  end

  def wrap_as_collapse
    wrap_with :div, class: "advanced-options" do
      wrap_with :div, id: "collapseFilter",
                      class: "collapse #{'in' if filter_active?}" do
        yield
      end
    end
  end

  view :filter_form do
    wrap_with :form, action: "/#{card.left.name}", method: "GET" do
      [
        standard_filter_formgroups,
        advanced_filter_formgroups,
        optional_render_filter_buttons
      ]
    end
  end

  def standard_filter_formgroups
    build_formgroups card.default_keys.unshift(:sort)
  end

  def advanced_filter_formgroups keys=nil
    keys ||= card.advanced_keys
    wrap_as_collapse { build_formgroups keys }
  end

  def build_formgroups rootnames
    rootnames.map do |rootname|
      _optional_render "#{rootname}_formgroup".to_sym
    end
  end

  view :filter_buttons do
    button_formgroup do
      [advanced_button, reset_button].compact
    end
  end

  def advanced_button
    return if card.advanced_keys.empty?
    toggle_text = filter_active? ? "Hide Advanced" : "Show Advanced"
    wrap_with :a, toggle_text, href: "#collapseFilter",
                                 class: "btn btn-default",
                                 data: { toggle: "collapse",
                                         collapseintext: "Hide Advanced",
                                         collapseouttext: "Show Advanced" }
  end

  def reset_button
    link_to_card card.cardname.left_name, "Reset",
                 class: "slotter btn btn-default margin-8"
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
    options[:path] = @paging_path_args.merge filter_args
    link_to raw(text), options
  end

  def text_filter type_name
    formgroup voo.title, class: "filter-input" do
      text_field_tag type_name, params[type_name], class: "form-control"
    end
  end

  def type_options type_codename, order="asc"
    type_id = Card::Codename[type_codename]
    Card.search type_id: type_id, return: :name, sort: "name", dir: order
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
    select_filter_html type_name, options, default, label
  end

  def select_filter_html type_name, options, default, label, no_chosen=false
    options = options_for_select(options, default)
    label ||= type_name.capitalize
    css_class = no_chosen ? "" : "pointer-select"
    formgroup label, class: "filter-input" do
      select_tag(type_name, options, class: css_class)
    end
  end

  def simple_multiselect_filter type_name, options, default, label=nil
    label ||= type_name.capitalize
    formgroup label, class: "filter-input #{type_name}" do
      select_tag type_name,
                 options_for_select(options, default),
                 multiple: true, class: "pointer-multiselect"
    end
  end

  def multiselect_filter type_codename, label=nil
    options = type_options type_codename
    label ||= type_codename.to_s
    simple_multiselect_filter type_codename.to_s, options,
                              Env.params[type_codename], label
  end

  view :name_formgroup do |args|
    name = args[:name] || "name"
    voo.title ||= "Keyword"
    text_filter name
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

  view :metric_type_formgroup do |args|
    card_name = "metric_type"
    type_card = Card[card_name]
    options = Card.search type_id: type_card.id, return: :name, sort: "name"
    if args[:select_list]
      options.unshift(["--", ""])
      simple_select_filter card_name, options,
                           Env.params[card_name], "Metric Type"
    else
      checkbox_formgroup "Type", options
    end
  end

  def checkbox_formgroup title, options, default=nil
    key = title.to_name.key
    param = Env.params[key] || default
    formgroup title do
      options.map do |option|
        checked = param.present? && param.include?(option.downcase)
        wrap_with :label do
          [check_box_tag("#{key}[]", option.downcase, checked), option]
        end
      end.join
    end
  end

  view :research_policy_formgroup do
    checkbox_formgroup "Research Policy", type_options(:research_policy)
  end

  def research_policy_select
    select_filter :research_policy, "asc"
  end

  view :metric_value_formgroup do
    options = {
      "Exists" => "exists",
      "None" => "none",
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

  view :importance_formgroup do
    options = ["I voted FOR", "I voted AGAINST", "I did NOT vote"]
    checkbox_formgroup "My Vote", options, ["i voted for", "i did not vote"]
  end

  view :industry_formgroup do
    industries = Card[card.industry_metric_name].value_options
    simple_select_filter "industry", [["--", ""]] + industries,
                         Env.params[:industry]
  end

  view :sort_formgroup do
    selected = Env.params[:sort] || sort_option_default
    select_filter_html "sort", options_for_select(sort_options, selected),
                       nil, nil, true
  end

  def sort_options
    { "Alphabetical" => "name" }
  end

  def sort_option_default
    "name"
  end
end
