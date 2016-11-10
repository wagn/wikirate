format :html do
  view :thumbnail do |args|
    wrap_with :div, class: "metric-thumbnail" do
      [
        _render_thumbnail_image(args),
        _render_thumbnail_text(args),
        css
      ]
    end
  end

  view :thumbnail_image do |args|
    wrap_with :div, class: "thumbnail-image" do
      [
        wrap_with(:span, "", class: "img-helper"),
        _render_designer_image(args)
      ]
    end
  end

  view :thumbnail_text do |args|
    wrap_with :div, class: "thumbnail-text" do
      [
        _render_thumbnail_title(args),
        _optional_render_thumbnail_subtitle(args)
      ]
    end
  end

  view :thumbnail_title do |_args|
    content = wrap_with(:div, nest(card.metric_title_card, view: :name),
                          class: "ellipsis")
    link_to_card card, content, title: card.metric_title_card.name
  end

  view :thumbnail_subtitle do |args|
    wrap_with :div do
      <<-HTML
      <small class="text-muted">
        #{args[:text]}
      #{args[:author]}
      </small>
      HTML
    end
  end

  def default_thumbnail_subtitle_args args
    args[:text] ||= [card.value_type, "designed by"].compact.join " | "
    args[:author] ||= link_to_card card.metric_designer
  end

  view :score_thumbnail do |_args|
    ""
  end
end
