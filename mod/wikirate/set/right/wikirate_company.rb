event :create_missing_companies, :integrate, on: :save do
  companies = item_names
  companies.each do |company|
    add_subcard company, type_id: Card::WikirateCompanyID unless Card.exists? company
  end
end
