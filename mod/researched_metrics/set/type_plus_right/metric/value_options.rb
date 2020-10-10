include_set Abstract::MetricChild, generation: 1
include_set Abstract::DesignerPermissions
include_set Abstract::Filterable

event :validate_no_commas_in_value_options, :validate,
      skip: :allowed, # until we fix all the bad ones
      on: :save, changed: :content do
  return unless metric_card&.multi_categorical? &&
                item_names.find { |item| item.match? "," }

  errors.add :content, "Multi-category options cannot have commas"
end

event :validate_value_options_match_values, :validate,
      skip: :allowed,  # should only be skipped when fixing bad data.
      on: :save, changed: :content do
  return unless (error_message = metric_card.validate_all_values)

  errors.add :content, "Change makes current answers invalid: #{error_message}"
end

def item_names args={}
  super args.merge(context: :raw)
end

def item_cards
  item_names.map(&:card)
end

def options_hash
  json_options? ? parse_content : option_hash_from_names
end

def json_options?
  type_id == Card::JsonID
end

def option_hash_from_names
  item_names.each_with_object({}) { |name, hash| hash[name] = name }
end

format :html do
  def default_item_view
    :name
  end

  def default_limit
    50
  end

  view :core do
    filtering(".RIGHT-answer ._filter-widget") do
      wrap_with :div, class: "pointer-list" do
        listing card.item_cards
      end
    end
  end

  def wrap_item rendered, item_view
    return super unless item_view == :name

    wrap_with :div, rendered,
              class: "pointer-item item-#{item_view} _filterable",
              data: { filter: { status: :exists,
                                year: :latest,
                                value: card.item_value(rendered) } }
  end
end
