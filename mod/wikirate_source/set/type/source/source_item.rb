format :html do
  def year
    return card.fetch(trait: :year).content if card.fetch(trait: :year)
    ""
  end

  def wrap_with_info
    wrap do
      wrap_with :div, class: "source-info-container with-vote-button" do
        yield
      end
    end
  end

  def add_toggle content
    wrap_with :div, class: "source-details-toggle",
                    data: { source_for: card.name, year: year } do
      content.html_safe
    end
  end

  def edit_slot
    voo.editor = :inline_nests
    super
  end

  def flat_list items
    wrap_with :ul, class: "list-inline" do
      items.map { |item| wrap_with :li, item }
    end
  end

  def website_text
    website_field = card.field :wikirate_website, new: {}
    nest website_field, view: :content, items: { view: :name }
  end

  def title_text
    nest(Card.fetch(card.cardname.field("title"), new: {}), view: :needed)
  end

  def source_item_footer
    items = [
      _render_note_count,
      _render_metric_count,
      _render_original_with_icon
    ]
    items.unshift(_render_year_with_icon) unless year.nil? || year == ""
    items
  end

  def icon
    # default as link
    "globe"
  end

  view :source_content do |args|
    content = wrap_with :div, class: "source-content" do
      [
        _render_source_link(args),
        _render_creator_credit
      ]
    end
    _render_icon + content
  end

  view :listing do
    wrap_with :div, class: "source-item" do
      [
        _render_vote,
        _render_source_content,
        _render_extras
      ]
    end
  end

  view :extras do
    wrap_with :div, class: "source-extra" do
      flat_list source_item_footer
    end
  end

  view :original_with_icon do
    icon = wrap_with(:i, " ", class: "fa fa-external-link-square")
    icon + _render_original_link
  end

  view :vote do |args|
    vote_item = subformat(card.vote_count_card).render_content args
    wrap_with(:div, vote_item, class: "source-vote")
  end

  view :icon do
    icon = wrap_with(:i, " ", class: "fa fa-globe")
    wrap_with(:div, icon, class: "source-icon")
  end

  view :creator_credit do
    wrap_with :div, class: "last-edit" do
      "added #{_render_created_at} ago by #{creator}"
    end
  end

  def creator
    # FIXME: codename!
    creator_card = card.field "*creator"
    nest creator_card, view: :core, items: { view: :link }
  end

  view :website_link do |_args|
    link_to_card card, website_text, class: "source-preview-link",
                                     target: "_blank"
  end

  view :title_link do |_args|
    klass = "source-preview-link preview-page-link"
    link_to_card card, title_text, target: "_blank", class: klass
  end

  view :source_link do |args|
    if args[:source_title] == :text
      website = website_text
      title = title_text
    else
      website = _render_website_link
      title = _render_title_link
    end
    wrap_with :div, class: "source-link" do
      [
        wrap_with(:span, website, class: "source-website"),
        wrap_with(:i, "", class: "fa fa-long-arrow-right"),
        wrap_with(:span, title, class: "source-title")
      ]
    end
  end

  view :year_helper do
    return "" if year.nil? || year == ""
    wrap_with(:small, "year:" + year[/\d+/], class: "source-year")
    # _render_original_link << year_helper.html_safe
  end

  view :year_with_icon do
    return "" if year.nil? || year == ""
    icon = wrap_with(:i, "", class: "fa fa-calendar")
    wrap_with(:span, icon + year[/\d+/])
  end

  view :direct_link do
    return "" unless card.source_type_codename == :wikirate_link
    link = card.fetch(trait: :wikirate_link).content
    wrap_with :a, href: link, target: "_blank" do
      [wrap_with(:i, class: "fa fa-external-link-square cursor"), "Original"]
    end
  end

  view :with_cite_button do |args|
    wrap_with_info do
      [
        _render_listing(args),
        wrap_with(:div, class: "pull-right") do
          wrap_with :a, "Cite!", href: "#",
                                 class: "btn btn-highlight _cite_button c-btn"
        end
      ]
    end
  end

  view :source_and_preview, cache: :never do |args|
    wrap_with :div, class: "source-details",
                    data: { source_for: card.name, year: year } do
      url_card = card.fetch(trait: :wikirate_link)
      url = url_card ? url_card.item_names.first : nil
      args[:url] = url
      render_with_cite_button +
        render_iframe_view(args.merge(url: url)).html_safe +
        render_hidden_information(args.merge(url: url)).html_safe
    end
  end

  view :relevant do |args|
    args[:source_title] = :text
    add_toggle render_with_cite_button(args).html_safe
  end

  view :cited, cache: :never do |args|
    parent =
      if (parent_card = Card.fetch(Env.params["id"]))
        parent_card.cardname.right
      end
    # check parent structure name has the word header
    # (i.e check if not metric value page)
    if !parent.nil? && parent.include?("header")
      wrap_with_info { _render_listing args }
    else
      args[:source_title] = :text
      source = wrap_with_info { _render_listing args }
      add_toggle(source)
    end
  end

  view :metric_import_link do
    ""
  end

  view :original_icon_link do
    voo.title = font_awesome icon
    _render_original_link
  end

  view :content do
    add_name_context
    super()
  end

  view :missing do
    _view_link
  end

  view :titled, tags: :comment do
    render_titled_with_voting
  end

  view :header do
    if voo.parent && voo.parent.ok_view == :open
      render_header_with_voting
    else
      super()
    end
  end

  # TODO: reuse the following in source_preview.rb
  view :metric_count do
    pretty_count :metric, "bar-chart"
  end

  view :note_count do
    pretty_count "note", "quote-left"
  end

  def font_awesome icon_name
    wrap_with :i, "", class: "fa fa-#{icon_name}"
  end

  def pretty_count type, icon_name
    output(
      [
        wrap_with(:span, id: "#{type}-count-number", class: "count-number") do
          count = send "#{type}_count"
          "#{font_awesome icon_name} #{count} "
        end,
        wrap_with(:span, Card.quick_fetch(type).name.pluralize)
      ]
    )
  end
end
