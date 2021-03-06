include_set Abstract::BsBadge

format do
  # note: overridden in cached_count
  def count
    card.respond_to?(:count) ? card.count : 0
  end
end

format :html do
  view :count, cache: :never do
    count
  end

  view :count_badge_label do
    responsive_count_badge_label || simple_count_badge_label
  end

  # TODO: override and turn off caching in cacheable sets (eg. pointers)
  view :count_badge, cache: :never, unknown: true do
    labeled_badge number_with_delimiter(count),
                  nest(card.right, view: :count_badge_label),
                  klass: card.safe_set_keys, title: card.name.right_name.vary(:plural)
  end

  def count_badge field
    field_nest field, view: :count_badge
  end

  def responsive_count_badge_label icon_tag: nil, simple_label: nil
    icon_tag ||= count_badge_icon
    return unless icon_tag

    simple_label ||= simple_count_badge_label
    haml :responsive_count_badge_label, label: simple_label, icon_tag: icon_tag
  end

  def count_badge_icon
    return unless card.codename

    mapped_icon_tag card.codename
  end

  def simple_count_badge_label
    card.name.vary(:plural)
  end

  def count_badges *fields
    fields.map { |f| count_badge f }
  end
end
