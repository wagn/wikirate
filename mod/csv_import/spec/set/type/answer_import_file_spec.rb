require_relative "../../support/shared_csv_import"

RSpec.describe Card::Set::Type::AnswerImportFile, type: :controller do
  routes { Decko::Engine.routes }
  before { @controller = CardController.new }
  let(:default_data) do
    {
      metric: "Jedi+disturbances in the Force",
      company: "Death Star",
      year: "2017",
      value: "yes",
      source: "http://google.com",
      comment: ""
    }
  end

  describe "view: import_table" do
    include_context "csv import" do
      let(:csv_row_class) { CSVRow::Structure::AnswerCSV }
      let(:import_card) { Card["answer import test"] }

      let(:data) do
        {
          exact_match:   { company: "Death Star" },
          alias_match:   { company: "Google"},
          partial_match: { company: "Sony"},
          no_match:      { company: "New Company"},
          not_a_metric:  { metric: "Not a metric", company: "Monster Inc" }
        }
      end
    end

    it "sorts by match type" do
      import_card = import_card_with_data
      allow(import_card).to receive(:file).and_return true
      table = import_card.format(:html)._render_import_table
      expect(table).to have_tag :table do
        with_tag :tbody do
          with_text /Not a metric.+New Company.+Sony.+Google.+Death Star/m
        end
      end
    end

    def table *rows
      import_card_with_rows(*rows).format(:html)._render_import_table
    end

    it "has no invalid alert if all data is valid" do
      expect(table(:exact_match, :alias_match))
        .not_to have_tag "div.alert"
    end

    it "has invalid alert if data is invalid" do
      expect(table(:not_a_metric))
        .to have_tag "div.alert.alert-danger" do
        with_tag :h4, text: "Invalid data"
        with_tag :ul, text: /Not a metric/
      end
    end
  end

  describe "import csv file" do
    include_context "csv import" do
      let(:csv_row_class) { CSVRow::Structure::AnswerCSV }
      let(:import_card) { Card["answer import test"] }
      let(:data) do
        {
          exact_match:
            { company: "Death Star", source: "http://google.com/1", comment: "chch"},
          alias_match:
            { company: "Google", source: "http://google.com/2" },
          partial_match:
            { company: "Sony", source: "http://google.com/3" },
          no_match:
            { company: "New Company", source: "http://google.com/4" },
          not_a_metric:
            { metric: "Not a metric", company: "Monster Inc", source: "http://google.com/5" },
          not_a_company:
            { company: "A", source: "http://google.com/6" },
          company_missing:
            { company: "", source: "http://google.com/7" },
          missing_and_invalid:
            { metric: "Not a metric", company: "", source: "http://google.com/8" },
          conflict_same_value_same_source:
            { company: "Death Star", year: "2000",
              source: "http://www.wikiwand.com/en/Opera" },
          conflict_same_value_different_source:
            { company: "Death Star", year: "2000", source: "http://google.com/10" },
          conflict_different_value:
            [default_data[:metric], "Death Star", "2000", "no", "http://google.com/11",
             "overridden"],
          invalid_value:
            { company: "Death Star", value: "100", source: "http://google.com/12" },
          monster_badge_1:
            { company: "Monster Inc.", year: "2000", source: "http://google.com/13" },
          monster_badge_2:
            { company: "Monster Inc.", year: "2001", source: "http://google.com/14" },
          monster_badge_3:
            { company: "Monster Inc.", year: "2002", source: "http://google.com/15" },
          wikirate_source:
            { source: sample_source.name }
        }
      end
    end

    let(:metric) { "Jedi+disturbances in the Force" }
    let(:year) { "2017" }

    include_context "answer import" do
      let(:company_row) { 1 }
      let(:value_row) { 3 }
    end

    before do
      login_as "joe_admin"
    end

    def create_import_card csv_file_name
      real_csv_file =
        File.open File.expand_path("../../../support/#{csv_file_name}.csv", __FILE__)
      card = create "test import", type_id: Card::AnswerImportFileID, answer_import_file: real_csv_file
      expect_card("test import").to exist.and have_file.of_size be_positive
      card
    end

    example "use csv file with wrong column order but headers" do
      import_card = create_import_card "wrong_order_with_headers"
      trigger_import_with_card import_card, :exact_match
      expect_answer_created(:exact_match)
    end

    example "create new import card and import", as_bot: true do
      import_card = create_import_card "test"

      expect_card("Jedi+disturbances in the Force+Death Star+2017+value").not_to exist
      params = import_params exact_match: { company_match_type: :exact }
      post :update, xhr: true, params: params.merge(id: "~#{import_card.id}")
      expect_card("Jedi+disturbances in the Force+Death Star+2017+value").to exist
    end

    it "imports answer" do
      trigger_import :exact_match
      expect_answer_created :exact_match
    end

    it "imports comment" do
      trigger_import :exact_match
      expect(Card[answer_name(:exact_match), :discussion]).to have_db_content(/chch/)
    end

    it "marks value in action as imported" do
      trigger_import :exact_match
      action_comment = value_card(:exact_match).actions.last.comment
      expect(action_comment).to eq "imported"
    end

    it "marks value in answer table as imported" do
      trigger_import :exact_match
      answer_id = answer_card(:exact_match).id
      answer = Answer.find_by_answer_id(answer_id)
      expect(answer.imported).to eq true
    end

    def badge_names
      badges = Card.fetch "Joe Admin", :metric_value, :badges_earned
      badges.item_names
    end

    xit "awards badges" do
      expect(badge_names).not_to include "Monster Inc.+Researcher+company badge"
      trigger_import :monster_badge_1, :monster_badge_2, :monster_badge_3
      expect(badge_names).to include "Monster Inc.+Researcher+company badge"
    end

    it "imports others if one fails" do
      trigger_import :exact_match, :invalid_value
      expect_card("Jedi+disturbances in the Force+Death Star+2017+value")
        .to exist.and have_db_content("yes")
    end

    it "marks import actions as import" do
      trigger_import :exact_match
      card = Card["Jedi+disturbances in the Force+Death Star+2017+value"]
      expect(card.actions.last.comment).to eq "imported"
    end

    example "using wikirate source name" do
      trigger_import :wikirate_source
      expect_answer_created :wikirate_source
    end

    describe "duplicates" do

    end

    context "company correction name is filled" do
      it "uses the corrected company name" do
        trigger_import no_match: { corrections: { company: "corrected company" } }
        expect(Card[metric, "corrected company", year])
          .to exist.and have_a_field(:value).with_content("yes")
      end

      context "no match" do
        it "creates company" do
          trigger_import no_match: { company_match_type: :none,
                                     corrections: { company: "corrected company" } }

          expect_card(answer_name(company: "corrected company")).to exist
          expect(Card["corrected company"]).to have_type :wikirate_company
        end

        it "adds answer to corrected answer and creates new alias card" do
          expect(Card["Monster Inc", :aliases]).not_to exist
          trigger_import no_match: { company_match_type: :none,
                                     corrections: { company: "Monster Inc." } }
          expect(Card["Monster Inc."]).to have_a_field(:aliases).pointing_to company_name(:no_match)
        end

        it "adds company in file to corrected company's aliases" do
          trigger_import exact_match: { company_match_type: :none,
                                        corrections: { company: "Google Inc." } }
          expect_card(answer_name(company: "Google Inc.")).to exist
          expect(Card["Google Inc."]).to have_a_field(:aliases).pointing_to company_name(:exact_match)
        end
      end

      context "partial match" do
        it "adds company name in file to corrected company's aliases" do
          trigger_import partial_match: { company_match_type: :partial,
                                          corrections: { company: "corrected company" },
                                          company_suggestion:  "Sony Corporation" }
          expect(answer_card(company: "corrected company")).to exist
          expect_card("corrected company")
            .to have_a_field(:aliases).pointing_to company_name(:partial_match)
        end

        it "uses suggestion if no correction" do
          trigger_import partial_match: { company_match_type: :partial,
                                          company_suggestion: "Sony Corporation" }
          expect_card(answer_name(company: "Sony Corporation")).to be_a Card
          expect_card("Sony Corporation")
            .to have_a_field(:aliases).pointing_to company_name(:partial_match)
        end
      end

      context "alias match" do
        it "uses suggestion" do
          trigger_import alias_match: { company_match_type: :alias,
                                        company_suggestion: "Google Inc." }

          expect_card(answer_name(company: "Google Inc")).to be_a Card
          expect_card("Google").to be_unknown
          expect_card(answer_name(company: "Google")).to be_unknown
        end
      end
    end
  end

  example "empty import" do
  end
end
