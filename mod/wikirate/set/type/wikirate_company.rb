include_set Abstract::WikirateTable
include_set Abstract::WikirateTabs

card_accessor :contribution_count, type: :number, default: "0"
card_accessor :direct_contribution_count, type: :number, default: "0"
card_accessor :aliases, type: :pointer
card_accessor :all_metric_values

view :missing do |args|
  _render_link args
end

def add_alias alias_name
  aliases_card.insert_item! 0, alias_name
end
