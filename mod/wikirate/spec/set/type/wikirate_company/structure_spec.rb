#
RSpec.describe Card::Set::Type::WikirateCompany::Structure do
  def card_subject
    Card["Google Inc"]
  end

  check_views_for_errors :open_content, :listing, :edit, :homepage_item,
                         :wikirate_topic_tab, :source_tab, :post_tab, :project_tab

  describe "details tab" do
    it "has jurisdiction table" do
      expect_view(:details_tab).to have_tag "table" do
        with_tag :tr do
          with_tag :td, text: "Headquarters"
          with_tag :td, text: "California (United States)"
        end
        # with_tag :tr do
        #   with_tag :td, text: "Country of Incorporation"
        #   with_tag :td, text: "Delaware (United States)"
        # end
      end
    end
  end

  describe "view :browse_item" do
    subject { Card["Death Star"].format(:html)._render_browse_item }

    it "has company title" do
      is_expected.to have_tag "div.company-header" do
        with_text "Death Star"
      end
    end

    it "has image link" do
      is_expected.to have_tag "div.company-page-logo-container" do
        with_tag :a, with: { href: "http://wikirate.org/Death_Star" } do
          with_tag :img
        end
      end
    end

    it "has counts with tab links" do
      is_expected.to have_tag "div.row.data-count" do
        with_tag "div.col-md-6.slab" do
          with_tag :a, with: { href: "/Death_Star?tab=metric" } do
            with_text /16\s*Metric/
          end
        end
        with_tag "div.col-md-6.slab" do
          with_tag :a, with: { href: "/Death_Star?tab=topic" } do
            with_text /2\s*Topics/
          end
        end
      end
    end
  end
end
