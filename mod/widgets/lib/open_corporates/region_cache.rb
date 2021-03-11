module OpenCorporates
  # cache for mapping jurisdiction codes to region ids

  class RegionCache
    class << self
      def jurisdiction_cards
        Card.where(right_id: Card::OcJurisdictionKeyID, left: { type_id: Card::RegionID })
            .pluck(:left_id, :content)
      end

      def cache
        Card::Cache[::OpenCorporates::RegionCache]
      end

      def jurisdiction_map
        @jurisdiction_map ||= cache.fetch("jurisdiction_map") do
          jurisdiction_cards.each_with_object({}) do |(region_id, oc_code), h|
            h[oc_code] = region_id
          end
        end
      end

      def region_name oc_code
        oc_code = oc_code.to_s.sub(/^oc_/, "")
        return unless (region_id = jurisdiction_map[oc_code])
        Card.fetch_name region_id
      end
    end
  end
end
