include_set Abstract::FilterHelper

def filter_hash with_select_filter=true
  filter = super()
  return filter unless with_select_filter && chart_params[:select_filter]
  filter.merge chart_params[:select_filter]
end

def chart_params
  if Env.params[:chart].is_a?(Hash)
    Env.params[:chart]
  elsif Env.params[:chart].is_a?(ActionController::Parameters)
    Env.params[:chart].to_unsafe_h
  else
    {}
  end
end

def chart_filter_params
  chart_params[:filter] || {}
end

format do
  def value_to_highlight
    return unless chart_params[:highlight].present?
    chart_params[:highlight]
  end

  delegate :chart_params, to: :card
end

format do
  def chart_item_count
    @chart_item_count ||= chart_filter_query.count
  end

  def chart_value_count
    @chart_value_count ||= chart_filter_query.value_count
  end

  def chart_filter_query
    FixedMetricAnswerQuery.new chart_metric_id,
                               chart_filter_hash
  end

  def chart_metric_id
    card.id
  end

  def chart_filter_hash
    card.chart_filter_params.present? ? card.chart_filter_params : card.filter_hash(false)
  end

  def zoom_in?
    card.numeric? # && chart_item_count > 10
  end
end

format :html do
  view :chart, cache: :never do
    vega_chart if show_chart?
  end

  def chartkick_chart
    line_chart path(view: :chartkick, format: :json)
  end

  def vega_chart
    id = unique_id.tr "+", "-"
    output [
      zoom_out_link,
      wrap_with(:div, "",
                id: id, class: "#{classy('vis')} _load-vis",
                data: { url: chart_load_url,
                        value_filter_text: value_filter_text })
    ]
  end

  def value_filter_text
    return "Researched" if filter_hash.empty?
    value_filter_to_human
  end

  def value_filter_to_human
    if filter_hash[:range]
      value_range_filter_to_human filter_hash[:range]
    else
      f = filter_hash
      f[:numeric_value] || f[:category] ||
        (f[:metric_value] && metric_value_options.key(f[:metric_value]))
    end
  end

  def value_range_filter_to_human range
    "%s < x < %s " % [number_to_human(range[:from]), number_to_human(range[:to])]
  end

  def chart_load_url
    path view: :vega, format: :json, filter: filter_hash(false), chart: chart_params
  end

  def show_chart?
    return unless card.relationship? || card.numeric? || card.categorical?

    card.filter_hash[:metric_value] != "none" &&
      card.filter_hash[:metric_value] != "unknown" # &&
    # chart_item_count > 3
  end

  def zoom_out_link
    return unless zoomed_in?
    link_to_view :filter_result, fa_icon(:zoom_out),
                 path: zoom_out_path_opts,
                 class: "slotter chart-zoom-out"
  end

  def zoom_out_path_opts
    chart_params[:zoom_out]
  end

  def zoomed_in?
    chart_params.present? && chart_params[:zoom_level].to_i.positive?
  end
end

format :json do
  # views requested by ajax to load chart
  view :vega, cache: :never do
    # ve = JSON.pretty_generate vega_chart_config.to_hash
    # puts ve
    vega_chart_config(value_to_highlight).to_json
  end

  # alternative library to vega
  view :chartkick, cache: :never do
    Answer.where(metric_id: card.id, latest: true)
          .group("CAST(value AS decimal)").count.chart_json
  end

  def vega_chart_config highlight=nil
    @data ||= chart_class.new self, link: true, highlight: highlight
  end

  def chart_class
    if card.ten_scale?
      Card::Chart::TenScaleChart
    elsif card.numeric? || card.relationship?
      Card::Chart::NumericChart
    else
      Card::Chart::CategoryChart
    end
  end
end
