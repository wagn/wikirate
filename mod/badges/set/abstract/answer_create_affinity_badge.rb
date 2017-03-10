# abstract set used for affinity badges like
# [Designer]+Researcher+designer_badge or
# [Company]+Research Engine+company_badge

include_set Abstract::AnswerCreateBadge

def virtual?
  true
end

format :html do
  delegate :affinity, :affinity_card, :affinity_type, to: :card

  view :badge, tags: :unknown_ok do
    type_name =
      affinity_type == :designer ? "Metric Designer" : affinity_type.to_s.capitalize
    nest affinity_card, view: :thumbnail, text: type_name
  end

  view :level do
    wrap_with :div, class: "badge-certificate" do
      wrap_with :div, class: "affinity-badge-container" do
        [
          "<div class='affinity-line'></div><hr/>",
          certificate(badge_level)
        ]
      end
    end
  end

end

def badge_key
  self[1].codename.to_sym
end

def affinity
  cardname.parts[0]
end

def affinity_card
  Card[affinity]
end
