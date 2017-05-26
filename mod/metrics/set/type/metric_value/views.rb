include_set Abstract::Chart

format :json do
  def vega_chart_config highlight=nil
    @data ||= chart_class.new(self,
                              highlight: card.value,
                              layout: { height: 70, width: 300,
                                        padding: { top: 10, left: 50,
                                                   bottom: 20, right: 30 },
                                        max_ticks: 5 },
                              link: false,
                              axes: :light)
  end

  def chart_metric_id
    card.metric_card.id
  end

  def chart_filter_hash
    super.merge year: card.year.to_i
  end
end

format :html do
  view :open_content do
    voo.hide! :chart # hide it in value_field
    bs do
      layout do
        row 3, 9 do
          column value_field
          column do
            row 12 do
              column _render_chart
            end
            row 12 do
              column _render_answer_details
            end
          end
        end
      end
    end
  end

  view :listing do
    _render_titled
  end

  # year, value, unit and flags
  view :concise do
    %(
      <span class="metric-year">#{card.year} = </span>
      <span class="metric-unit"> #{currency} </span>
      #{_render_metric_details}
      <span class="metric-unit"> #{legend} </span>
      <div class="pull-right">
        <small>#{checked_value_flag.html_safe}</small>
        <small>#{comment_flag.html_safe}</small>
      </div>
    )
  end

  # value, unit, and flags
  view :value do
    wrap_with :div, class: "td value" do
      [
        wrap_with(:span, currency, class: "metric-unit"),
        _render_value_link,
        wrap_with(:span, legend, class: "metric-unit"),
        checked_value_flag,
        comment_flag,
        _render_value_details_toggle,
        value_details
      ]
    end
  end

  # styled pretty value
  # FIXME: need better name
  view :metric_details do
    span_args = { class: "metric-value" }
    add_class span_args, grade if card.scored?
    add_class span_args, :small if pretty_value.length > 5
    wrap_with :span, span_args do
      beautify(pretty_value).html_safe
    end
  end

  def grade
    return unless (value = (card.value && card.value.to_i))
    case value
    when 0, 1, 2, 3 then :low
    when 4, 5, 6, 7 then :middle
    when 8, 9, 10 then :high
    end
  end

  def numeric_metric?
    (value_type = card.metric_card.fetch trait: :value_type) &&
      %w(Number Money).include?(value_type.item_names[0])
  end

  def numeric_value?
    return false unless numeric_metric? || !card.metric_card.researched?
    !card.value_card.unknown_value?
  end

  def pretty_value
    @pretty_value ||= numeric_value? ? humanized_number(card.value) : card.value
  end

  def checked_value_flag
    checked_card = card.field "checked_by"
    return "" unless checked_card && !checked_card.item_names.empty?
    css_class = "fa fa-lg fa-check-circle verify-blue margin-left-10"
    wrap_with "i", "", class: css_class, title: "Value checked"
  end

  def comment_flag
    disc = card.fetch trait: :discussion
    return "" unless disc && disc.content.present?
    wrap_with "i", "", title: "Has comments",
                       class: "fa fa-lg fa-commenting margin-left-10"
  end

  view :modal_details, cache: :never do |args|
    span_args = { class: "metric-value" }
    add_class span_args, grade if card.scored?
    wrap_with :span, span_args do
      subformat(card)._render_modal_link(
        args.merge(
          link_text: pretty_value,
          link_opts: {
            path: { slot: { show: :menu, optional_horizontal_menu: :hide } },
            title: card.value,        "data-complete-number" => card.value,
            "data-tooltip" => "true", "data-placement" => "top"
          }
        )
      )
    end
  end

  def beautify value
    card.scored? ? colorify(value) : value
  end

  view :value_link do
    wrap_with :span, class: "metric-value" do
      link_to beautify(pretty_value), path: "/#{card.cardname.url_key}",
                                      target: "_blank"
    end
  end

  # Metric value view for data
  view :timeline_data do
    wrap_with :div, class: "timeline-row" do
      [
        _render_year,
        _render_value,
        _render_chart
      ]
    end
  end

  view :year do
    wrap_with :div, class: "td year" do
      [
        wrap_with(:span, card.cardname.right),
        wrap_with(:div, "", class: "timeline-dot")
      ]
    end
  end

  view :sources do
    output [
      wrap_with(:h5, "Cited"),
      subformat(card.fetch(trait: :source)).render_core(items: { view: :cited })
    ]
  end

  view :comments do |_args|
    disc_card = card.fetch trait: :discussion, new: {}
    subformat(disc_card)._render_titled title: "Discussion", show: "commentbox",
                                        home_view: :titled
  end

  view :credit_name do |args|
    wrap_with :div, class: "credit" do
      [
        nest(card, view: :core, structure: "creator credit"),
        _optional_render(:source_link, args, :hide)
      ]
    end
  end

  view :source_link do |_args|
    if (source_card = card.fetch(trait: :source))
      source_card.item_cards.map do |i_card|
        subformat(i_card).render_original_icon_link
      end.join "\n"
    else
      ""
    end
  end
end
