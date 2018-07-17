format :html do
  view :thin_listing do
    render_listing hide: :listing_middle
  end

  view :listing do
    wrap { haml :listing }
  end

  view :expanded_listing do
    wrap { haml :expanded_listing }
  end

  def self.view_for_override viewname
    view viewname do
      "override #{viewname} view"
    end
  end

  view_for_override :listing_left
  view_for_override :listing_right
  view_for_override :listing_middle
  view_for_override :listing_bottom

  view :listing_page_link do
    link_to_card card, icon_tag(:open_in_new), class: "text-muted"
  end

  def toggle_class
    "slotter btn btn-sm btn-outline-secondary p-0 border-0 rounded-0"
  end

  view :listing_expand_link do
    link_to_view :expanded_listing, icon_tag(:play_arrow), class: toggle_class
  end

  view :listing_collapse_link do
    link_to_view :listing, icon_tag(:arrow_drop_down, class: "md-24"), class: toggle_class
  end

  view :box, template: :haml

  view_for_override :box_middle
  view_for_override :box_bottom
end
