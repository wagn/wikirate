RSpec.describe Card::Set::Self::ResearchPage do
  let(:format) do
    Card[:research_page].format
  end

  def params opts
    opts.each do |k, v|
      Card::Env.params[k] = v
    end
  end

  describe "#slot_machine" do
    subject do
      format.slot_machine metric: "Joe User+researched",
                          company: "Death Star",
                          year: "2014"
    end

    it "has metric slot" do
      is_expected.to have_tag ".metric" do
        with_tag ".metric-color", /researched/
      end
    end

    it "has company slot" do
      is_expected.to have_tag ".company" do
        with_tag ".company-color", /Death Star/
      end
    end

    it "has year slot" do
      is_expected.to have_tag ".year" do
        with_tag :strong, /2014/
      end
    end

    it "has answer slot" do
      is_expected.to have_tag :div, /Answer/
    end
  end

  describe "#right_side_tabs" do
    subject do
      format.right_side_tabs
    end

    it "has source tab" do
      params metric: "Joe User+researched", company: "Death Star",
             year: "2014", project: "Evil Project"
      is_expected.to have_tag "#research_page-source" do
        with_tag :form do
          with_hidden_field "card[subcards][+company][content]", "Death Star"
          with_hidden_field "success[view]", "new_sources"
          with_hidden_field "success[id]", "Joe User+researched+Death Star+2014"
        end
      end
    end
  end

  describe "view: left_research_side" do
    subject do
      format.render_left_research_side
    end

    it "has slot", params: { metric: "Joe User+researched",
                             company: "Death Star",
                             year: "2014",
                             project: "Evil Project" } do
      is_expected.to have_tag ".card-slot.left_research_side-view"
    end
  end
end
