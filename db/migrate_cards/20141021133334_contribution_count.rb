# -*- encoding : utf-8 -*-

class ContributionCount < Card::Migration
  def up
    Card.create! name: "*contribution count", codename: :contribution_count, type_code: :number, content: "0"
  end
end
