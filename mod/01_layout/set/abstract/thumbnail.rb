format :html do
  view :thumbnail do
    wrap_with :div, class: "thumbnail" do
      [
          thumbnail_image_wrap,
          thumbnail_text_wrap
      ]
    end
  end

  def thumbnail_image_wrap
    wrap_with :div, class: "thumbnail-image" do
      [
          wrap_with(:span, "", class: "img-helper"),
          thumbnail_image
      ]
    end
  end

  def thumbnail_text_wrap
    wrap_with :div, class: "thumbnail-text" do
      [
          thumbnail_title,
          _optional_render_thumbnail_subtitle
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
end
