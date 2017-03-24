format :html do
  view :thumbnail_plain do |args|
    voo.hide! :thumbnail_link
    wrap_with :div do
      [
        thumbnail_image_wrap,
        thumbnail_text_wrap(args)
      ]
    end
  end

  view :thumbnail do |args|
    voo.show :thumbnail_link
    wrap_with :div, class: "thumbnail" do
      [
        thumbnail_image_wrap,
        thumbnail_text_wrap(args)
      ]
    end
  end

  def thumbnail_image_wrap
    wrap_with :div, class: "pull-left image-box icon" do
      [
        wrap_with(:span, "", class: "img-helper"),
        thumbnail_image
      ]
    end
  end

  def thumbnail_text_wrap args
    wrap_with :div, class: "thumbnail-text" do
      [
        thumbnail_title,
        _optional_render_thumbnail_subtitle(args)
      ]
    end
  end

  def thumbnail_image
    image = field_nest(:image, view: :core, size: :small)
    return image unless voo.show?(:thumbnail_link)
    link_to_card card, image
  end

  def thumbnail_title
    wrap_with :div, class: "ellipsis" do
      voo.show?(:thumbnail_link) ? _render_link : _render_name
    end
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
