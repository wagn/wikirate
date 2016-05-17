describe Card::Set::LtypeRtype::Metric::WikirateCompany do
  context "metric values updated" do
    let(:metric) { get_a_sample_metric :number }
    let(:company) { get_a_sample_company }
    let(:mv_id) { Card::MetricValueID }

    before do
      login_as "joe_admin"
      subcard =
        get_subcards_of_metric_value metric, company, "33", "2015", nil
      @metric_value = Card.create type_id: mv_id, subcards: subcard
      @metric_company = Card.fetch "#{metric.name}+#{company.name}"
    end
    describe "creating a metric value" do
      it "updates latest year" do
        expect(@metric_company.cached_count).to eq(2015)
      end
    end
    describe "deleting a metric value" do
      it "updates latest year to zero" do
        all_mv = Card.search type_id: Card::MetricValueID,
                             left: @metric_company.name
        all_mv.each(&:delete)
        @metric_company.delete
        expect(@metric_company.cached_count).to eq(0)
      end
    end
  end
end
