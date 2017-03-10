include_set Abstract::AwardBadges

event :award_company_logo_badges, before: :refresh_updated_answers,
      on: :save do
  award_badge_if_earned :logo
end

def badge_hierarchy
  Type::WikirateCompany::BadgeHierarchy
end

def logo_count user_id=nil
  Card.search left: { type_id: WikirateCompanyID },
              right_id: LogoID,
              edited_by: user_id || Auth.current_id,
              return: :count
end
