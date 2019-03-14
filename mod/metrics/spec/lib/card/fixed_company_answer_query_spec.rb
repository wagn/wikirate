require "./test/seed"

RSpec.describe Card::FixedCompanyAnswerQuery do
  RESEARCHED_TITLES = ["Industry Class", "Weapons", "big multi", "big single",
                       "researched number 2", "researched number 3", "small multi",
                       "small single"].freeze

  let(:company) { Card[@company_name || "Death_Star"] }
  let(:all_metrics) { Card.search type_id: Card::MetricID, return: :name }
  let(:all_metric_titles) { all_metrics.map { |n| n.to_name[1..-1].to_name } }

  let :missing_metrics do
    latest_metric_keys = ::Set.new(latest_answers.map { |n| n.to_name.left_name.key })
    all_metric_titles.reject { |n| latest_metric_keys.include? n.key }
  end

  let :latest_answers_by_importance do
    ["disturbances in the Force+2001", "Victims by Employees+1977",
     "Sith Lord in Charge+1977", "dinosaurlabor+2010", "cost of planets destroyed+1977",
     "friendliness+1977", "deadliness+Joe User+1977", "deadliness+Joe Camel+1977",
     "disturbances in the Force+Joe User+2001", "darkness rating+1977",
     "descendant 1+1977", "descendant hybrid+1977", "double friendliness+1977",
     "researched number 1+1977", "more evil+1977", "RM+1977", "deadliness+1977"]
  end

  let :latest_answers do # by metric name
    ["dinosaurlabor+2010", "cost of planets destroyed+1977", "darkness rating+1977",
     "deadliness+1977", "deadliness+Joe Camel+1977", "deadliness+Joe User+1977",
     "disturbances in the Force+2001", "disturbances in the Force+Joe User+2001",
     "double friendliness+1977", "friendliness+1977", "more evil+1977",
     "Sith Lord in Charge+1977", "Victims by Employees+1977", "descendant 1+1977",
     "descendant hybrid+1977", "researched number 1+1977", "RM+1977"]
  end

  let :researched do
    ["dinosaurlabor+2010", "cost of planets destroyed+1977", "deadliness+1977",
     "disturbances in the Force+2001", "Sith Lord in Charge+1977",
     "Victims by Employees+1977", "RM+1977", "researched number 1+1977"]
  end

  def missing_answers year=Time.now.year
    with_year missing_metrics, year
  end

  def with_year list, year=Time.now.year
    Array(list).map { |name| "#{name}+#{year}" }
  end

  # @return [Array] of metric_title(+scorer)+year strings
  def answers list
    list.map do |a|
      [a.name.parts[1..-3], a.name.parts.last].flatten.join "+"
    end
  end

  # @return [Array] of metric_title(+scorer)+year strings
  def filter_by filter, latest=true
    filter.reverse_merge! year: :latest if latest
    sort = { sort_by: :metric_name }
    answers described_class.new(company.id, filter, sort).run
  end

  # @return [Array] of answer cards
  def sort_by key, order=:asc
    filter = { year: :latest }
    sort = { sort_by: key, sort_order: order }
    described_class.new(company.id, filter, sort).run
  end

  context "with single filter condition" do
    context "with keyword" do
      it "finds exact match" do
        expect(filter_by(name: "Jedi+disturbances in the Force+Joe User"))
          .to eq ["disturbances in the Force+Joe User+2001"]
      end

      it "finds partial match" do
        expect(filter_by(name: "dead"))
          .to eq with_year(["deadliness", "deadliness+Joe Camel",
                            "deadliness+Joe User"], 1977)
      end

      it "ignores case" do
        expect(filter_by(name: "DeAd"))
          .to eq with_year(["deadliness", "deadliness+Joe Camel",
                            "deadliness+Joe User"], 1977)
      end
    end

    context "with year" do
      it "finds exact match" do
        expect(filter_by(year: "2000"))
          .to eq with_year(["dinosaurlabor", "disturbances in the Force",
                            "disturbances in the Force+Joe User"], 2000)
      end
    end

    context "with research policy" do
      it "finds exact match" do
        expect(filter_by(research_policy: "Designer Assessed"))
          .to eq ["dinosaurlabor+2010"]
      end
    end

    context "with metric type" do
      it "finds formulas" do
        expect(filter_by(metric_type: "Formula"))
          .to eq ["double friendliness+1977", "friendliness+1977"]
      end

      it "finds scores" do
        expect(filter_by(metric_type: "Score"))
          .to eq ["deadliness+Joe Camel+1977", "deadliness+Joe User+1977",
                  "disturbances in the Force+Joe User+2001"]
      end

      it "finds wikiratings" do
        expect(filter_by(metric_type: "WikiRating")).to eq ["darkness rating+1977"]
      end

      it "finds researched" do
        expect(filter_by(metric_type: "Researched")).to contain_exactly(*researched)
      end

      it "finds combinations" do
        expect(filter_by(metric_type: %w[Score Formula]))
          .to eq ["deadliness+Joe Camel+1977", "deadliness+Joe User+1977",
                  "disturbances in the Force+Joe User+2001", "double friendliness+1977",
                  "friendliness+1977"]
      end
    end

    context "with topic" do
      it "finds exact match" do
        expect(filter_by(topic: "Force")).to eq ["disturbances in the Force+2001"]
      end
    end

    context "with vote" do
      it "finds upvoted" do
        expect(filter_by(importance: :upvotes)).to eq ["disturbances in the Force+2001"]
      end

      it "finds downvoted" do
        expect(filter_by(importance: :downvotes)).to eq ["deadliness+1977"]
      end

      it "finds notvoted" do
        expect(filter_by(importance: :novotes))
          .to eq latest_answers - ["disturbances in the Force+2001", "deadliness+1977"]
      end

      it "finds voted" do
        expect(filter_by(importance: [:upvotes, :downvotes]))
          .to eq ["deadliness+1977", "disturbances in the Force+2001"]
      end

      it "finds upvoted and notvoted" do
        expect(filter_by(importance: [:upvotes, :novotes]))
          .to eq latest_answers - ["deadliness+1977"]
      end
    end

    context "with value" do
      let :all_answers do
        latest_answers + with_year(["researched number 2", "researched number 3",
                                    "small multi", "small single"])
      end
      let :unknown_answers do
        with_year(
          ["deadliness", "deadliness+Joe Camel", "deadliness+Joe User",
           "double friendliness", "friendliness", "Victims by Employees"], 1977
        )
      end

      it "finds missing values" do
        expect(filter_by(metric_value: :none)).to contain_exactly(*missing_answers)
      end

      it "finds all values" do
        filtered = filter_by(metric_value: :all)
        expect(filtered).to include(*all_answers)
        expect(filtered.size)
          .to eq Card.search(type_id: Card::MetricID, return: :count)
      end

      it "finds unknown values" do
        @company_name = "Samsung"
        expect(filter_by(metric_value: :unknown))
          .to eq unknown_answers
      end

      it "finds known values" do
        @company_name = "Samsung"
        all_known = filter_by(metric_value: :known).all? do |a|
          a.include?("researched number") || a.include?("descendant")
        end
        expect(all_known).to be_truthy
      end

      describe "filter by update date" do
        before { Timecop.freeze SharedData::HAPPY_BIRTHDAY }
        after { Timecop.return }

        it "finds today's edits" do
          expect(filter_by({ metric_value: :today }, false))
            .to eq ["disturbances in the Force+1990"]
        end

        it "finds this week's edits" do
          expect(filter_by({ metric_value: :week }, false))
            .to eq ["disturbances in the Force+1990", "disturbances in the Force+1991"]
        end

        it "finds this months's edits" do
          expect(filter_by({ metric_value: :month }, false))
            .to eq ["dinosaurlabor+2010", "disturbances in the Force+1990",
                    "disturbances in the Force+1991", "disturbances in the Force+1992"]
        end
      end
    end

    context "with invalid filter key" do
      it "doesn't matter" do
        expect(filter_by(not_a_filter: "Death")).to contain_exactly(*latest_answers)
      end
    end

    context "with project" do
      it "finds exact match" do
        expect(filter_by(project: "Evil Project"))
          .to eq ["disturbances in the Force+2001"]
      end
    end
  end

  context "with multiple filter conditions" do
    context "with filter for missing values and ..." do
      it "... year" do
        missing2001 = missing_answers(2001) + with_year(
          ["Victims by Employees", "cost of planets destroyed",
           "darkness rating", "deadliness", "deadliness+Joe Camel",
           "deadliness+Joe User", "dinosaurlabor", "friendliness",
           "Sith Lord in Charge", "descendant 1", "descendant hybrid",
           "RM", "researched number 1", "more evil", "double friendliness"],
          2001
        )
        missing2001.delete "disturbances in the Force+2001"
        filtered = filter_by(metric_value: :none, year: "2001")
        expect(filtered)
          .to contain_exactly(*missing2001)
      end

      it "... keyword" do
        expect(filter_by(metric_value: :none, name: "number 2"))
          .to contain_exactly(*with_year(["researched number 2"]))
      end

      it "... project" do
        expect(filter_by(metric_value: :none, project: "Evil Project"))
          .to contain_exactly(*with_year(["researched number 2"]))
      end

      it "... metric_type" do
        expect(filter_by(metric_value: :none, metric_type: "Researched"))
          .to contain_exactly(*with_year(RESEARCHED_TITLES))
      end

      it "... policy and year" do
        expect(filter_by(metric_value: :none, research_policy: "Designer Assessed",
                         year: "2001"))
          .to eq ["dinosaurlabor+2001", "Industry Class+2001"]
      end
    end

    context "with filter for all values and ..." do
      it "... project" do
        expect(filter_by(metric_value: :all, project: "Evil Project"))
          .to contain_exactly("disturbances in the Force+2001",
                              *with_year("researched number 2"))
      end

      it "... year" do
        expect(filter_by(metric_value: :all, year: "2001"))
          .to contain_exactly(*with_year(all_metric_titles, 2001))
      end

      it "... policy and year" do
        expect(filter_by(metric_value: :all,
                         research_policy: "Designer Assessed",
                         year: "2001"))
          .to eq ["dinosaurlabor+2001", "Industry Class+2001"]
      end

      it "... metric_type" do
        expect(filter_by(metric_value: :all, metric_type: "Researched"))
          .to contain_exactly(*(with_year(RESEARCHED_TITLES) + researched))
      end
    end

    it "policy and importance" do
      expect(filter_by(policy: "Evil Project", importance: :upvotes))
        .to eq(["disturbances in the Force+2001"])
    end

    it "year and industry" do
      Timecop.freeze(SharedData::HAPPY_BIRTHDAY) do
        expect(filter_by(year: "1991", topic: "Force",
                         importance: :upvotes, metric_value: :week))
          .to eq(with_year("disturbances in the Force", 1991))
      end
    end

    it "all in" do
      Timecop.freeze(SharedData::HAPPY_BIRTHDAY) do
        expect(filter_by(year: "1992", topic: "Force", importance: :upvotes,
                         metric_value: :month, project: "Evil Project",
                         research_policy: "Community Assessed", name: "in the",
                         metric_type: "Researched"))
          .to eq(with_year("disturbances in the Force", 1992))
      end
    end
  end

  context "with sort conditions" do
    let(:sorted_designer) { ["Fred", "Jedi", "Joe User"] }

    it "sorts by designer name (asc)" do
      sorted = sort_by(:metric_name, :asc).map { |a| a.name.parts.first }.uniq
      expect(sorted).to eq(sorted_designer)
    end

    it "sorts by designer name (desc)" do
      sorted = sort_by(:metric_name, :desc).map { |a| a.name.parts.first }.uniq
      expect(sorted).to eq(sorted_designer.reverse)
    end

    it "sorts by title" do
      sorted = sort_by(:title_name).map { |a| a.name.parts.second }
      indices =
        ["cost of planets destroyed", "darkness rating", "deadliness",
         "researched number 1", "Victims by Employees"].map do |t|
          sorted.index(t)
        end
      expect(indices).to eq [0, 1, 2, 13, 16]
    end

    it "sorts by recently updated" do
      expect(sort_by(:updated_at, :desc).first.name)
        .to eq "Fred+dinosaurlabor+Death_Star+2010"
    end

    it "sorts by importance" do
      actual = answers sort_by(:importance, :desc)
      expected = latest_answers_by_importance

      upvoted = (0..1)
      notvoted = (2..-2)
      downvoted = -1

      expect(actual[upvoted]).to contain_exactly(*expected[upvoted])
      expect(actual[notvoted]).to contain_exactly(*expected[notvoted])
      expect(actual[downvoted]).to eq(expected[downvoted])
    end
  end
end