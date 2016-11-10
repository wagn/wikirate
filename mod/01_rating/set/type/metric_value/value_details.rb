format :html do
  def value_details
    send "_render_#{card.metric_type}_value_details"
  end

  def wrap_value_details
    wrap_with :div, class: "metric-value-details collapse" do
      [
        _optional_render(:credit_name),
        yield,
        wrap_with(:div, _render_comments, class: "comments-div")
      ]
    end
  end

  view :researched_value_details do
    checked_by = card.fetch trait: :checked_by, new: {}
    checked_by = nest(checked_by, view: :double_check_view)
    wrap_value_details do
      [
        wrap_with(:div, checked_by, class: "double-check"),
        wrap_with(:div, _render_sources, class: "cited-sources")
      ]
    end
  end

  view :formula_value_details do
    wrap_value_details do
      wrap_with :div do
        [
          _render_formula_table,
          wrap_with(:h5, "Formula"),
          nest(card.metric_card.formula_card, view: :core)
        ]
      end
    end
  end

  view :wikirating_value_details do
    wrap_value_details do
      wrap_with :div do
        [
          _render_wikirating_table,
          wrap_with(:div, class: "col-md-12") do
            wrap_with(:div, class: "pull-right") { "= #{colorify card.value}"}
          end
        ]
      end
    end
  end

  view :score_value_details do
    wrap_value_details do
      metric_thumbnail = nest(base_metric_card(card), view: :thumbnail)
      value =
        wrap_with(:span, base_metric_value(card).value, class: "metric-value")
      table([[metric_thumbnail, value]], header: ["Original Metric", "Value"])
    end
  end

  view :formula_table do
    table_content =
      card.metric_card.formula_card.input_cards.map do |item_card|
        next if item_card.type_id == YearlyVariableID
        metric_row(item_card)
      end.compact
    table(table_content, header: ["Metric", "Raw Value", "Score"])
  end

  view :wikirating_table do
    table_content =
      card.metric_card.formula_card.translation_table.map do |card_name, weight|
        card = Card.fetch(card_name)
        metric_row(card, weight)
      end
    columns = ["Metric", "Raw Value", "Score", "Weight", "Points"]
    table(table_content, header: columns)
  end

  def metric_row input_card, weight=""
    wql = input_card.metric_value_query
    wql[:left][:right] = card.company_name
    wql[:right] = card.year
    if (value_card = Card.search(wql).first)
      metric_row_values(input_card, value_card, weight)
    end
  end

  def metric_row_values input_card, value_card, weight
    score_value = ""
    if value_card.metric_type == :score
      score_value = value_card.value
      raw_value = base_metric_value(value_card).value
    else
      raw_value = value_card.value
    end
    raw_value = wrap_with(:span, raw_value, class: "metric-value")
    metric_row_content(input_card, weight, raw_value, score_value)
  end

  def metric_row_content input_card, weight, raw_value, score_value
    metric_thumbnail = nest(input_card, view: :thumbnail)
    content_array = [metric_thumbnail, raw_value, colorify(score_value)]
    if card.metric_type == :formula
      content_array
    else
      points = (score_value.to_f * (weight.to_f / 100)).round(1)
      content_array.push("x " + weight + "%", "= " + points.to_s)
    end
  end

  def base_metric_card score_card
    score_card.metric_card.left
  end

  def base_metric_value score_card
    metric = base_metric_card(score_card)
    with_company = metric.field(card.company_name)
    with_company.field(card.year)
  end

  view :value_details_toggle do
    css_class = "fa fa-caret-right fa-lg margin-left-10 btn btn-default btn-sm"
    wrap_with(:i, "", class: css_class,
                        data: { toggle: "collapse-next",
                                parent: ".value",
                                collapse: ".metric-value-details"
                              }
               )
  end
end
