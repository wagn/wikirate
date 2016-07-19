include_set Abstract::AllValues

def raw_content
  %(
    {
      "left":{
        "type":"metric_value",
        "left":{
          "right":"_left"
        }
      },
      "right":"value",
      "limit":0
    }
  )
end

def sort_params
  [(Env.params["sort"] || "upvoted"), "desc"]
end

def fill_metrics existing_cache
  result = {}
  Card.search(type_id: MetricID, return: :name).each do |metric|
    result[metric] = [] unless existing_cache[metric]
  end
  result
end

def cached_values
  @cached_metric_values ||= get_cached_values

  if @cached_metric_values
    # replace the cache with non existing metric if value is none
    if Env.params["value"] == "none"
      @cached_metric_values = fill_metrics @cached_metric_values
    end
    result = @cached_metric_values.select do |metric, values|
      filter metric, values
    end
    result
  else
    @cached_metric_values
  end
end

def filter metric, values
  filter_by_metric(metric) &&
    filter_by_value(values) &&
    filter_by_year(values)
end

def filter_by_metric metric
  filter_by_name(metric) &&
    filter_by_topic(metric) &&
    filter_by_research_policy(metric) &&
    filter_by_vote(metric) &&
    filter_by_type(metric)
end

def filter_by_name metric
  return true unless Env.params["metric"].present?
  metric.downcase.include?(Env.params["metric"].downcase)
end

def filter_by_topic metric
  return true unless Env.params["wikirate_topic"].present?
  topic_cards = Card[metric].fetch trait: :wikirate_topic
  topic_cards && topic_cards.item_names.include?(Env.params["wikirate_topic"])
end

def filter_by_research_policy metric
  return true unless Env.params["research_policy"].present?
  research_policy_card = Card[metric].fetch trait: :research_policy, new: {}
  research_policy_card &&
    research_policy_card.item_names.include?(Env.params["research_policy"])
end

def filter_by_vote metric
  return true unless Env.params["vote"].present? && Env.params["vote"] != "all"
  votee_type = Env.params["vote"]
  votee_search = "#{Auth.current.name}+metric+#{votee_type}_search"
  @votee_search ||= Card.fetch(votee_search).item_names
  @votee_search.include?(metric)
end

def filter_by_type metric
  return true unless Env.params["metric_type"].present?
  return false if Card[metric].type_id != MetricID
  mt = Card[metric].metric_type
  Env.params["metric_type"].any? { |s| s.casecmp(mt) == 0 }
end

def filter_by_value values
  value = Env.params["value"] || "exists"
  return values.empty? if value == "none"
  return !values.empty? if value == "exists"
  time_diff = second_by_unit value
  values.any? do |v|
    v["last_update_time"] <= time_diff
  end
end

def second_by_unit unit
  case unit
  when "last_hour"
    3600
  when "today"
    86_400
  when "week"
    604_800
  when "month"
    18_144_000
  end
end

def filter_by_year values
  return true unless Env.params["year"].present?
  values.any? { |v| v["year"] == Env.params["year"] }
end

format do
  def num?
    false
  end

  def latest_row_value row, key
    row[1].sort_by { |value| value[key] }.reverse[0][key]
  end

  def sort_recent_desc metric_values
    metric_values.sort do |x, y|
      value_a = latest_row_value x, "last_update_time"
      value_b = latest_row_value y, "last_update_time"
      value_b <=> value_a
    end
  end

  def metric_vote_count metric_name
    if (vote_count_card = Card[metric_name].fetch(trait: :vote_count))
      vote_count_card.content.to_i
    else
      0
    end
  end

  def sort_upvoted_desc metric_values
    metric_values.sort do |x, y|
      value_a = metric_vote_count(x[0])
      value_b = metric_vote_count(y[0])
      value_b <=> value_a
    end
  end

  def sort_value_count_desc metric_values
    metric_values.sort do |x, y|
      y[1].size - x[1].size
    end
  end

  def sorted_result sort_by, _order, _is_num=true
    cached_values = card.cached_values
    sorted = case sort_by
             when "value"
               sort_value_count_desc cached_values
             when "recent"
               sort_recent_desc cached_values
             else # upvoted
               sort_upvoted_desc cached_values
             end
    sorted
  end
end

format :html do
  view :card_list_items do |args|
    search_results.map do |row|
      c = Card.fetch "#{row[0]}+#{card.cardname.left}"
      render :card_list_item, args.clone.merge(item_card: c)
    end.join "\n"
  end

  view :card_list_header do
    <<-HTML
      <div class='yinyang-row column-header'>
        <div class='company-item value-item'>
          <div class='metric-list-header slotter header'>
            Metrics
          </div>
          <div class='metric-list-header slotter data'>
            Values
          </div>
        </div>
      </div>
    HTML
  end

  view :metric_list do |_args|
    wrap_with :div, class: "yinyang-list" do
      render_content(hide: "title",
                     items: { view: :metric_row })
    end
  end
end
