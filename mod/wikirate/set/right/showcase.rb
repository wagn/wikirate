format :html do
  view :open do |args|
    if (l = card.left) && (Auth.current_id == l.id || l.type_code == :wikirate_company)
      args[:slot_class] = "editable"
    end
    super(args)
  end

  # view :core do |args|
  # [CampaignID, MetricID, ClaimID, SourceID, OverviewID].map do |type_id|
  #     if (search_card = card.fetch(:trait=>type_id, :new=>{:type_id=>PointerID}))
  #       nest(search_card, :slot_class=>('hidden' if search_card.item_cards.empty?), :view=>:yinyang_list)
  #     end
  #   end
  # end
end
