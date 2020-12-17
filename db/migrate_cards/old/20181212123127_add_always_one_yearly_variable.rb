# -*- encoding : utf-8 -*-

class AddAlwaysOneYearlyVariable < Cardio::Migration
  def up
    subcards =
      Card.search(type_id: Card::YearID, return: :name)
          .each_with_object({}) do |year, h|
        h["+#{year}"] = { type_id: Card::YearlyAnswerID,
                          "+value" => { type_id: Card::YearlyValueID, content: "1" } }
      end

    ensure_card name: "always one", type_id: Card::YearlyVariableID, subcards: subcards
  end
end
