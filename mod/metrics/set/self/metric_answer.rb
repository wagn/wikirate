include_set Abstract::BrowseFilterForm
include_set Abstract::FilterFormgroups
include_set Abstract::MetricFilterFormgroups
include_set Abstract::BookmarkFiltering
include_set Abstract::SdgFiltering
include_set Abstract::AnswerSearch

format do
  def default_filter_hash
    { status: :exists, metric_name: "", company_name: "" }
  end

  def filter_keys
    %i[status year metric_name company_name company_group
       wikirate_topic value updated updater check calculated
       metric_type value_type project source research_policy bookmark]
  end

  def filter_label field
    field.to_sym == :metric_type ? "Metric type" : super
  end
end

format :html do
  view :titled_content do
    [field_nest(:description), render_filtered_content(items: { view: :bar })]
  end

  def details_view
    :metric_details_sidebar
  end

  def header_cells
    %w[Metric Company Answer]
  end

  def cell_views
    [:metric_thumbnail_with_bookmark, :company_thumbnail_with_bookmark, :concise]
  end

  def quick_filter_list
    @quick_filter_list ||=
      bookmark_quick_filters + topic_quick_filters + project_quick_filters
  end

  def bookmark_quick_filters
    return [] unless my_bookmarks?

    %i[wikirate_company metric].map do |codename|
      { bookmark: :bookmark,
        text: "My #{codename.cardname} Bookmarks",
        class: "quick-filter-by-#{codename}" }
    end
  end
end

format :json do
  def default_vega_options
    { layout: { width: 700 } }
  end
end
