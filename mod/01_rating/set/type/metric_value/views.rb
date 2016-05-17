card_accessor :value, type: :phrase

def year
  cardname.right
end

def metric_name
  cardname.left_name.left
end

def company_name
  cardname.left_name.right
end

def year_card
  Card.fetch year
end

def metric_card
  Card.fetch metric_name
end

def company_card
  Card.fetch company_name
end

def metric_type
  metric_card.metric_type.downcase.to_sym
end

def value_type
  if (value_type_card = Card.fetch "#{metric_card.name}+value type") &&
     !value_type_card.content.empty?
    return value_type_card.item_names[0]
  end
  nil
end

def source_subcards new_source_card
  [new_source_card.subfield(:file), new_source_card.subfield(:text),
   new_source_card.subfield(:wikirate_link)]
end

def source_in_request?
  sub_source_card = subfield("source")
  return false if sub_source_card.nil? ||
                  sub_source_card.subcard("new_source").nil?
  new_source_card = sub_source_card.subcard("new_source")
  source_subcard_exist?(new_source_card)
end

def source_subcard_exist? new_source_card
  file_card, text_card, link_card = source_subcards new_source_card
  (file_card && file_card.attachment.present?) ||
    (text_card && text_card.content.present?) ||
    (link_card && link_card.content.present?)
end

def researched?
  (mc = metric_card) && mc.researched?
end

def scored?
  (mc = metric_card) && mc.scored?
end

def valid_value_name?
  cardname.parts.size >= 3 &&
    metric_card && metric_card.type_id == MetricID &&
    company_card && company_card.type_id == WikirateCompanyID &&
    year_card && year_card.type_id == YearID
end

# TODO: add #subfield_present? method to subcard API
def subfield_exist? field_name
  subfield_card = subfield(field_name)
  !subfield_card.nil? && subfield_card.content.present?
end

event :set_metric_value_name,
      before: :set_autoname, when: proc { |c| c.cardname.parts.size < 4 } do
  return if valid_value_name?
  self.name = %w(metric company year).map do |part|
    name_part = remove_subfield(part)
    unless name_part
      errors.add :name, "missing #{part} part"
      next
    end
    name_part.content.gsub("[[", "").gsub("]]", "")
  end.join "+"
end

event :validate_metric_value_fields, before: :set_metric_value_name do
  %w(metric company year value).each do |name|
    unless subfield_exist?(name)
      errors.add :field, "Missing #{name}. Please check before submit."
    end
  end
end

def number? str
  true if Float(str)
rescue
  false
end

event :validate_value_type, :validate, on: :save do
  # check if the value fit the value type of metric
  if metric_card && (value_type = metric_card.fetch(trait: :value_type)) &&
     (value_card = subfield(:value))
    value = value_card.content
    return if value.casecmp("unknown") == 0
    case value_type.item_names[0]
    when "Number", "Money"
      unless number?(value)
        errors.add :value, "Only numeric content is valid for this metric."
      end
    when "Category"
      # check if the value exist in options
      if !(option_card = Card["#{metric_card.name}+value options"]) ||
         !option_card.item_names.include?(value)
        url = "/#{option_card.cardname.url_key}?view=edit"
        anchor = %(<a href='#{url}' target="_blank">add options</a>)
        errors.add :value, "Please #{anchor} before adding metric value."
      end
    end
  end
end

def report_type
  metric_card.fetch trait: :report_type
end

def add_report_type source_name
  if report_type
    report_names = report_type.item_names
    source_card = Card.fetch(source_name).fetch trait: :report_type, new: {}
    report_names.each do |report_name|
      source_card.add_item! report_name
    end
  end
end

def add_company source_name
  source_card = Card.fetch(source_name).fetch trait: :wikirate_company, new: {}
  source_card.add_item! company_name
end

event :process_sources, :prepare_to_validate,
      on: :save, when: proc { |c| c.researched? } do
  if (sources = subfield(:source))
    sources.item_names.each do |source_name|
      if Card.exists? source_name
        add_report_type source_name
        add_company source_name
      else
        errors.add :source, "#{source_name} does not exist."
      end
    end
  elsif action == :create
    errors.add :source, "does not exist."
  end
end

format :html do
  view :open_content do |args|
    _render_timeline_data args
  end

  view :concise do |args|
    %(
      <span class="metric-year">
        #{card.year} =
      </span>
      <span class="metric-unit">
        #{currency}
      </span>
      #{_render_metric_details}
      <span class="metric-unit">
        #{legend(args)}
      </span>
      <div class="pull-right">
        <small>#{checked_value_flag.html_safe}</small>
        <small>#{comment_flag.html_safe}</small>
      </div>
    )
  end

  def grade
    return unless (value = (card.value && card.value.to_i))
    case value
    when 0, 1, 2, 3 then :low
    when 4, 5, 6, 7 then :middle
    when 8, 9, 10 then :high
    end
  end

  view :metric_details do
    span_args = { class: "metric-value" }
    add_class span_args, grade if card.scored?
    add_class span_args, :small if fetch_value.length > 5
    wrap_with :span, span_args do
      beautify(fetch_value).html_safe
    end
  end

  def humanized_big_number number
    number_to_human number,
                    units: {
                      unit: "", billion: "B", million: "M", quadrillion: "P",
                      thousand: "K", trillion: "T"
                    },
                    format: "%n%u",
                    delimiter: "",
                    precision: 3
  end

  def humanized_small_number number
    less_than_one = number < 1
    humanized = number_with_precision number,
                                      delimiter: ",",
                                      strip_insignificant_zeros: true,
                                      precision: (less_than_one ? 3 : 1),
                                      significant: less_than_one
    (humanized == "0" && number > 0) ? "~0" : humanized
  end

  def humanized_number value
    number = BigDecimal.new(value)
    if number > 1_000_000
      humanized_big_number number
    else
      humanized_small_number number
    end
  end

  def numeric_metric?
    (value_type = card.metric_card.fetch trait: :value_type) &&
      %w(Number Money).include?(value_type.item_names[0])
  end

  def fetch_value
    if (numeric_metric? || !card.metric_card.researched?) &&
       !card.value_card.unknown_value?
      humanized_number card.value
    else
      card.value
    end
  end

  def checked_value_flag
    checked_card = card.field "checked_by"
    if checked_card && !checked_card.item_names.empty?
      css_class = "fa fa-lg fa-check-circle verify-blue margin-left-10"
      content_tag("i", "", class: css_class, title: "Value checked")
    else ""
    end
  end

  def comment_flag
    return "" unless Card.exists? card.cardname.field("discussion")
    disc = card.fetch(trait: :discussion)
    if disc.content.include? "w-comment-author"
      css_class = "fa fa-lg fa-commenting margin-left-10"
      content_tag("i", "", class: css_class, title: "Has comments")
    else ""
    end
  end

  view :modal_details do |args|
    span_args = { class: "metric-value" }
    add_class span_args, grade if card.scored?
    wrap_with :span, span_args do
      subformat(card)._render_modal_link(
        args.merge(
          text: fetch_value,
          path_opts: { slot: { show: :menu, optional_horizontal_menu: :hide } },
          html_args: {
            "data-complete-number" => card.value,
            "data-tooltip" => "true",
            "data-placement" => "top",
            "title" => card.value
          }
        )
      )
    end
  end

  def beautify value
    card.scored? ? colorify(value) : value
  end

  view :value_link do
    url = "/#{card.cardname.url_key}"
    link = link_to beautify(fetch_value), url, target: "_blank"
    content_tag(:span, link.html_safe, class: "metric-value")
  end

  # Metric value view for data
  view :timeline_data do
    wrap_with :div, class: "timeline-row" do
      [
        _render_year,
        _render_value
      ]
    end
  end

  view :year do
    year = content_tag(:span, card.cardname.right)
    year << content_tag(:div, "", class: "timeline-dot")
    content_tag(:div, year.html_safe, class: "td year")
  end

  view :value do |args|
    value = content_tag(:span, currency, class: "metric-unit")
    value << _render_value_link(args)
    value << content_tag(:span, legend(args), class: "metric-unit")
    value << checked_value_flag.html_safe
    value << comment_flag.html_safe
    value << _render_value_details_toggle
    value << value_details(args)
    content_tag(:div, value.html_safe, class: "td value")
  end

  view :sources do
    heading = content_tag(:h5, "Cited")
    sources = card.fetch trait: :source
    heading << subformat(sources).render_core(item: :cited).html_safe
  end

  view :comments do |_args|
    disc_card = card.fetch trait: :discussion, new: {}
    comments = disc_card.real? ? subformat(disc_card).render_core : ""
    comments += subformat(disc_card).render_comment_box
    wrap do
      [
        content_tag(:h5, "Discussion"),
        comments.html_safe
      ]
    end
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
