include Set::Abstract::Calculation

def scorer
  cardname.tag
end

def scorer_card
  right
end

def basic_metric
  cardname.trunk
end

def basic_metric_card
  left
end

# delegate :question_card, to: :basic_metric_card

def normalize_value value
  return value if value.is_a? String
  return "0" if value < 0
  return "10" if value > 10
  value.to_s
end

def value_type
  "Number"
end

view :select do |_args|
  options = [["-- Select --", ""]] + card.option_names.map { |x| [x, x] }
  select_tag("pointer_select",
             options_for_select(options, card.item_names.first),
             class: "pointer-select form-control"
            )
end

format :html do
  def new_name_field form=nil, options={}
    form ||= self.form
    option_names =
      Card.search type_id: MetricID,
                  right_plus: [
                    "*metric type",
                    content: ["in", "[[Formula]]", "[[Researched]]"]
                  ], sort: "name", return: :name
    options = [["-- Select --", ""]] + option_names.map { |x| [x, x] }
    new_name_editor_wrap(options, option_names)
  end

  def new_name_editor_wrap options, option_names
    editor_wrap :card do
      hidden_field_tag("card[subcards][+metric][content]", option_names.first,
                       class: "card-content") +
        select_tag("pointer_select",
                   options_for_select(options, option_names.first),
                   class: "pointer-select form-control") +
        help_text.html_safe
    end
  end

  def help_text
    <<-HTML
    <div class="help-block help-text">
      <p>Metric name = [Scored Metric name]+[Your username]</p>
    </div>
    HTML
  end

  def default_thumbnail_subtitle_args args
    args[:text] ||= "scored by"
    args[:author] ||= link_to_card card.scorer
  end

  view :scorer_info do |_args|
    wrap_with :div, class: "metric-designer-info" do
      link_to_card card.scorer_card.cardname.field("contribution"),
                   author_info(card.scorer_card, "Scored by")
    end
  end

  view :scorer_image do |_args|
    nest card.scorer_card.field(:image, new: {}), view: :core, size: :small
  end

  view :score_thumbnail do |_args|
    link_text = author_info card.scorer_card, "Scored by",
                            "#{time_ago_in_words card.created_at} ago"
    wrap_with :div, class: "metric-designer-info" do
      link_to_card card, link_text, class: "row list-group-item"
    end
  end
end

event :set_scored_metric_name, :initialize,
      on: :create do
  return if cardname.parts.size >= 3
  metric = (mcard = remove_subfield(:metric)) && mcard.item_names.first
  self.name = "#{metric}+#{Auth.current.name}"
end

event :default_formula, :prepare_to_store,
      on: :create,
      when:  proc { |c| !c.subfield_formula_present?  } do
  add_subfield :formula, content: "{{#{basic_metric}}}",
                         type_id: PlainTextID
end

def subfield_formula_present?
  (f = subfield(:formula)) && f.content.present?
end
