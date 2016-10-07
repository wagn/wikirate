include_set Abstract::Filter
def filter_words
  filter_words = Array.wrap(Env.params[:wikirate_company]) || []
  if Env.params[:wikirate_topic]
    filter_words += Array.wrap(Env.params[:wikirate_topic])
  end
  if Env.params[:wikirate_tag]
    filter_words += Array.wrap(Env.params[:wikirate_tag])
  end
  filter_words
end

def params_keys
  []
end

def default_keys
  %w(claimed cited company topic)
end

def advanced_keys
  []
end

def get_query params={}
  search_args = { limit: 15 }
  search_args.merge! sort_query
  search_args.merge! cited_query
  search_args.merge! claimed_query
  search_args[:type] = left.name
  params[:query] = Card.tag_filter_query(
    filter_words,
    search_args,
    %w(tag company topic)
  )
  super(params)
end

def cited_query
  yes_query = { referred_to_by: { left: { type_id: WikirateAnalysisID },
                                  right_id: OverviewID } }
  case Env.params[:cited]
  when "yes" then yes_query
  when "no"  then { not: yes_query }
  else            {}
  end
end

def claimed_query
  yes_query = { linked_to_by: { left: { type_id: ClaimID },
                                right_id: SourceID } }
  case Env.params[:claimed]
  when "yes" then yes_query
  when "no"  then { not: yes_query }
  else            {}
  end
end

def sort_query
  if Env.params[:sort] == "recent"
    { sort: "update" }
  else
    { :sort => { "right" => "*vote count" },
      "sort_as" => "integer", "dir" => "desc" }
  end
end

format :html do
  def page_link_params
    [:sort, :cited, :claimed, :wikirate_company, :wikirate_topic]
  end

  def default_sort_formgroup_args args
    super args
    args[:sort_options] = {
      "Most Important" => "important", "Most Recent" => "recent"
    }
    args[:sort_option_default] = "important"
  end

  view :cited_formgroup do |_args|
    options = { "All" => "all", "Yes" => "yes", "No" => "no" }
    simple_select_filter "cited", options, (params[:cited] || "all")
  end

  view :claimed_formgroup do |_args|
    options = { "All" => "all", "Yes" => "yes", "No" => "no" }
    simple_select_filter "Has Notes?", options, (params[:claimed] || "all")
  end

  view :company_formgroup do
    multiselect_filter :wikirate_company, "Company"
  end

  view :topic_formgroup do
    multiselect_filter :wikirate_topic, "Topic"
  end

  view :tag_formgroup do
    multiselect_filter :wikirate_tag, "Tag"
  end
end
