
# cache for mapping jurisdiction codes to region ids
module ClassMethods
  def jurisdiction_cards
    Card.where(right_id: Card::OcJurisdictionKey, left: { type_id: Card::RegionID })
      .pluck(:left_id, :content)
  end

  def cache
    Card::Cache[Card::Set::Right::OcJurisdictionKey]
  end

  def jurisdiction_map
    @jurisdiction_map ||= cache.fetch("jurisdiction_map") do
      jurisdiction_cards.each_with_object({}) do |(region_id, oc_code), h|
        h[oc_code] = region_id
      end
    end
  end

  def region_name oc_code
    oc_code = oc_code.sub(/^oc_/, "")
    return unless (region_id = jurisdiction_map[oc_code])
    Card.fetch_name region_id
  end
end

def oc_code
  content.to_sym
end

event :clear_jurisdiction_key_cache do
  Set::Right::OcJurisdictionKey.cache.reset_all
end