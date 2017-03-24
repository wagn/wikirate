include_set Abstract::Thumbnail

format :html do
  def default_thumbnail_args _args
    class_up "thumbnail", "metric-thumbnail"
  end

  def thumbnail_image
    _render_designer_image
  end

  def thumbnail_title
    content = wrap_with(:div, nest(card.metric_title_card,
                                   view: :name),
                        class: "ellipsis")
    return content unless voo.show?(:thumbnail_link)
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
