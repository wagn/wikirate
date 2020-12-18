# -*- encoding : utf-8 -*-

class ShareWithProject < Cardio::Migration
  def up
    ensure_card "nav menu", codename: "nav_menu", type_id: Card::HtmlID
    ensure_card "wikirate footer", codename: "wikirate_footer", type_id: Card::HtmlID
    ensure_card "wikirate license", codename: "wikirate_license", type_id: Card::HtmlID
  end
end
