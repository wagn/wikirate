def virtual?
  true
end

include_set Set::Abstract::Filter

format :html do

  class FilterForm
    def initialize categories
      @categories = categories
    end
  end

  view :core do |args|
    form_tag path(mark: card.cardname.left, view: content_view),
             class: "filter-container slotter", id: "_filter_container",
             method: "GET", data: { remote: "true" } do
      output [
               _render_filter_details(args),
               _render_main_filter(args)
             ]
    end
  end

  view :main_filter do |args|
    wrap_with :div, class: "filter-header" do
      [
        _render_main_filter_form_content(args),
        more_filter_options_link
      ]
    end
  end

  # style="display: #{filter_active};"
  view :filter_details do |args|
    html_class = "filter-details collapse"
    html_class += " in" if filter_advanced_active?
    wrap_with :div, class: html_class, id: "_filter_details" do
      filter_form_body_content(args)
    end
  end

  def more_filter_options_link
    button_tag("more filter options",
               situation: "link",
               class: " filter-toggle btn-sm",
               type: "button",
               data: {
                 toggle: "collapse",
                 target: "#_filter_details",
                 collapseintext: "fewer filter options",
                 collapseouttext: "more filter options"
               })
  end

  def filter_fields categories, args
    categories.map do |cat|
      _optional_render "#{cat}_formgroup", args
    end.join.html_safe
  end

  def filter_categories
    []
  end

  def filter_active?
    Env.params.keys.any? { |key| filter_categories.include? key }
  end

  def filter_advanced_active?
    filter_categories.any? { |key| Env.params[key.to_s].present? }
  end

  def content_view
    :data
  end

  def default_button_formgroup_args args
    filter_icon = fa_icon("search").html_safe
    args[:buttons] = [
      button_tag(filter_icon, situation: "default", disable_with: "Filtering"),
      button_formgroup_reset_button
    ].join
  end

  def button_formgroup_reset_button
    html_class = "slotter btn btn-default margin-8"
    html_class += filter_active? ? " show" : " hide"
    link_to_card card.cardname.left, "Reset",
                 path: { view: content_view },
                 remote: true, class: html_class
  end

  def default_main_filter args
    args[:filter_title] ||= "Filter & Sort"
  end

  def filter_form_content _args
    "fill me"
  end
end
