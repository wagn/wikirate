include_set Abstract::MetricChild, generation: 1
include_set Abstract::DesignerPermissions
include_set Abstract::SingleItem

VALUE_TYPE_CODES = %i[number category multi_category money free_text].freeze

event :validate_value_type_type_and_content do
  errors.add :type, "must be Pointer" unless type_id == Card::PointerID
  errors.add :content, "must be valid value type" unless valid_content?
end

event :validate_value_type_matches_values, :validate, on: :save, changed: :content do
  return unless (error_message = metric_card.validate_all_values)

  errors.add :answers, "Cannot change to #{content}: #{error_message}"
end

event :update_metric_lookup_value_id, :finalize, changed: :content do
  ::Metric.where(metric_id: left_id).refresh :value_type_id unless left.action == :create
end

def valid_content?
  first_code.in? VALUE_TYPE_CODES
end

def value_type
  first_name
end
