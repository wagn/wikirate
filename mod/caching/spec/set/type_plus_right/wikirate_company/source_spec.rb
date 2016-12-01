# encoding: UTF-8

describe Card::Set::TypePlusRight::WikirateCompany::Source do
  it "updates cached count" do
    samsung_sources = Card.fetch "Apple Inc", :source
    source = sample_source
    company_list = source.fetch trait: :wikirate_company, new: {}
    company_list.drop_item! "Apple Inc"
    expect(samsung_sources.cached_count).to eq 0
    company_list.add_item! "Apple Inc"
    expect(samsung_sources.cached_count).to eq 1
  end
end
