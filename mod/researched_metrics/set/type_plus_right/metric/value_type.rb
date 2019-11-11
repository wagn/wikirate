include_set Abstract::MetricChild, generation: 1
include_set Abstract::DesignerPermissions

event :validate_value_type_type_and_content do
  errors.add :type, "must be Pointer" unless type_id == Card::PointerID
  errors.add :content, "must be valid value type" unless valid_content?
end

event :validate_type_of_existing_values, :validate,
      on: :save, changed: :content do
  case value_type
  when "Number", "Money" then validate_numeric_values
  when "Category" then validate_categorical_values
  end
end

def valid_content?
  value_type_code.in? %i[number category multi_category money free_text]
end

def value_type
  item_names.first
end

def value_type_code
  item_cards.first&.codename
end

def validate_categorical_values
  validator = CategoryValueValidator.new left
  return unless validator.invalid_values?
  add_categorical_error validator
end

def validate_numeric_values
  metric_card.researched_answers.find do |answer|
    next if valid_numeric_value? answer.value
    add_numeric_error answer
  end
end

def valid_numeric_value? value
  number?(value) || Answer.unknown?(value)
end

def add_numeric_error answer
  errors.add Card.fetch_name(answer.answer_id),
             "'#{answer.value}' is not a numeric value."
end

def add_categorical_error validator
  errors.add :value, validator.error_msg
end
