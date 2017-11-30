include_set Abstract::Table

def project_name
  name.left
end

def company_project_card company_card
  Card.fetch company_card.name, project_name, new: {}
end

def all_company_project_cards
  item_cards_by_name.map do |company|
    next unless company.type_id == WikirateCompanyID
    company_project_card company
  end.compact
end

def item_cards_by_name
  item_cards.sort {|x,y| x.name <=> y.name }
end

format :html do
  view :core do
    wrap_with :div, class: "progress-bar-table" do
      company_progress_table
    end
  end

  def company_progress_table
    wikirate_table(
      :company, card.all_company_project_cards,
      [:company_thumbnail, :research_button, :research_progress_bar],
      header: ["Company", "", "Metrics Researched"],
      table: { class: "company-research" },
      td: { classes: ["metric", "button-column", "progress-column"] }
    )
  end
end
