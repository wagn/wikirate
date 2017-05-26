# FIXME: this is supposed to be in type_plus_right/metric_value/value
#   but wagn doesn't load that set module for new cards

include_set Abstract::MetricChild, generation: 3

def value_card
  self
end

def value
  content
end

def metric_plus_company
  cardname.parts[0..-3].join "+"
end

def metric_key
  metric.to_name.key
end

def company_key
  company.to_name.key
end

def metric_plus_company_card
  Card.fetch metric_plus_company
end

def unknown_value?
  content.casecmp("unknown").zero?
end

event :check_length, :validate, on: :save, changed: :content do
  if content.size >= 1000
    errors.add :value, "too long (not more than 1000 characters)"
  end
end

event :mark_as_imported, before: :finalize_action do
  return unless ActManager.act_card.type_id == MetricValueImportFileID
  @current_action.comment = "imported"
end

event :update_related_scores, :finalize, when: :scored_metric? do
  Card.search type_id: MetricID, left_id: metric_card.id do |metric|
    metric.update_value_for! company: company_key, year: year
  end
end

def scored_metric?
  metric_card.type_id == MetricID && metric_card.scored?
end

event :update_related_calculations, :finalize,
      on: [:create, :update, :delete] do
  metrics = Card.search type_id: MetricID,
                        right_plus: ["formula", { refer_to: metric }]
  metrics.each do |metric|
    metric.update_value_for! company: company_key, year: year
  end
end

event :update_double_check_flag, :validate, on: [:update, :delete],
                                            changed: :content do
  return unless left.fetch trait: :checked_by
  attach_subcard cardname.left_name.field_name(:checked_by), content: ""
end

event :no_left_name_change, :prepare_to_validate,
      on: :update, changed: :name do
  return if @supercard # as part of other changes (probably) ok
  return unless cardname.right == "value" # ok if not a value anymore
  return if (metric_value = Card[cardname.left]) &&
            metric_value.type_id == MetricValueID
  errors.add :name, "not allowed to change. " \
                    "Change #{name_was.to_name.left} instead"
end
