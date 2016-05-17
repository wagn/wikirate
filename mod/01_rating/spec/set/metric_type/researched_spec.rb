# -*- encoding : utf-8 -*-

describe Card::Set::MetricType::Researched do
  let(:metric) { Card["Jedi+disturbances in the Force"] }

  describe '#metric_type' do
    subject { metric.metric_type }
    it { is_expected.to eq "Researched" }
  end
  describe '#metric_type_codename' do
    subject { metric.metric_type_codename }
    it { is_expected.to eq :researched }
  end
  describe '#metric_designer' do
    subject { metric.metric_designer }
    it { is_expected.to eq "Jedi" }
  end
  describe '#metric_designer_card' do
    subject { metric.metric_designer_card }
    it { is_expected.to eq Card["Jedi"] }
  end
  describe '#metric_title' do
    subject { metric.metric_title }
    it { is_expected.to eq "disturbances in the Force" }
  end
  describe '#metric_title_card' do
    subject { metric.metric_title_card }
    it { is_expected.to eq Card["disturbances in the Force"] }
  end
  describe '#question_card' do
    subject { metric.question_card.name }
    it { is_expected.to eq "Jedi+disturbances in the Force+Question" }
  end
  describe '#value_type' do
    subject { metric.value_type }
    it { is_expected.to eq "Category" }
  end
  describe '#value_options' do
    subject { metric.value_options }
    it { is_expected.to eq %w(yes no) }
  end
  describe '#categorical?' do
    subject { metric.categorical? }
    it { is_expected.to be_truthy }
  end
  describe '#researched?' do
    subject { metric.researched? }
    it { is_expected.to be_truthy }
  end
  describe '#scored?' do
    subject { metric.scored? }
    it { is_expected.to be_falsey }
  end

  describe '#analysis_names' do
    subject { metric.analysis_names }
    it { is_expected.to be_empty }
    context "when tagged with topic" do
      it "finds related Analysis" do
        Card::Auth.as_bot do
          Card.create! name: "Jedi+disturbances in the Force+topics",
                       content: "Star Wars"
        end
        is_expected.to eq ["Death_Star+Star Wars"]
      end
    end
  end
  describe '#companies_with_years_and_values' do
    subject { metric.companies_with_years_and_values }
    it { is_expected.to eq [%w(Death_Star 1977 yes)] }
  end
  describe '#random_valued_company_card' do
    subject { metric.random_valued_company_card }
    it { is_expected.to eq Card["Death_Star"] }
  end

  describe ".create" do
    it "composes the name using the title and designer subfields" do
      Card::Auth.as_bot do
        metric = Card.create! type_id: Card::MetricID,
                              subfields: {
                                title: "MetricTitle",
                                designer: "MetricDesigner"
                              }
        expect(metric.name).to eq "MetricDesigner+MetricTitle"
      end
    end
  end

  describe "structure" do
    it "has necessary components" do
      expect(metric.format(:html)._render_open_content).to(
        have_tag("div", with: { class: "container-fluid yinyang" }) do
          # TOP SECTION
          with_tag("div", with: { class: "wiki" }) do
            with_tag("div", with: { class: "pull-right" }) do
              with_tag("div", with: { class: "metric-info" }) do
                with_tag "h5", text: "Metric Type:"
                with_tag("div", with: { class: "RIGHT-Xmetric_type" })
                with_tag "h5", text: "Tags:"
                with_tag("div", with: { class: "RIGHT-topic" })
              end
            end
            with_tag("div", with: { class: "metric-details-header" }) do
              with_tag("div", with: { class: "name" }) do
                with_tag "a", text: "disturbances in the Force"
              end
              with_tag("div", with: { class: "metric-designer-info" }) do
                with_tag("a", with: { href: "/Jedi+contribution" }) do
                  with_tag("img")
                  with_tag("h3", text: "Jedi")
                end
              end
            end
          end
          with_tag("div", with: { class: "metric-info" }) do
            # ...add more here?
          end
        end
      )
    end
  end
end
