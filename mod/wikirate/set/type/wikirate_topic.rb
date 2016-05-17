card_accessor :vote_count, type: :number, default: "0"
card_accessor :upvote_count, type: :number, default: "0"
card_accessor :downvote_count, type: :number, default: "0"

card_accessor :contribution_count, type: :number, default: "0"
card_accessor :direct_contribution_count, type: :number, default: "0"

view :missing do |args|
  _render_link args
end

def indirect_contributor_search_args
  [
    { type_id: Card::ClaimID, right_plus: ["topic", link_to: name] },
    { type_id: Card::SourceID, right_plus: ["topic", link_to: name] },
    { type_id: Card::WikirateAnalysisID, right: name }
  ]
end

format :html do
  def view_caching?
    true
  end
end
