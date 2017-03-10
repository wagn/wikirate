describe Card::Set::Abstract::BadgeSet do
  let(:set) do
    described_class.new researcher: 1,
                        research_engine: 2,
                        research_fellow: 5
  end

  describe "#initialize" do
    context "levels defined explicitly" do
      let(:set) { set = described_class.new researcher: [3, :silver] }
      it "initializes correcly" do
        expect(set.threshold(:researcher)).to eq 3
        expect(set.level(:researcher)).to eq :silver
        expect(set.level_index(:researcher)).to eq 1
      end
    end

    context "not all levels defined" do
      let(:set) { set = described_class.new researcher: 3 }
      it "initializes correcly" do
        expect(set.threshold(:researcher)).to eq 3
        expect(set.level(:researcher)).to eq :bronze
        expect(set.level_index(:researcher)).to eq 0
      end
    end

    context "same threshold used twice" do
      def init_with_same_threshold
        described_class.new researcher: 1, research_engine: 1
      end

      it "fails" do
        expect { init_with_same_threshold }
          .to raise_error(ArgumentError, "thresholds have to be unique")
      end
    end
  end

  describe "#earns_badge" do
    context "threshold reached" do
      subject { set.earns_badge(5) }
      it "returns earned badge name" do
        is_expected.to eq "Research Fellow"
      end
    end

    context "threshold not reached" do
      subject { set.earns_badge(4) }
      it "returns earned badge name" do
        is_expected.to eq nil
      end
    end
  end

  describe "#all_earned_badges" do
    subject { set.all_earned_badges(4) }
    it "returns all earned badges" do
      is_expected.to contain_exactly "Researcher", "Research Engine"
    end
  end

  describe "#threshold" do
    it "takes key argument" do
      expect(set.threshold(:researcher)).to eq 1
    end
    it "takes name argument" do
      expect(set.threshold("Research Engine")).to eq 2
    end
  end

  describe "#level" do
    it "takes key argument" do
      expect(set.level(:researcher)).to eq :bronze
    end

    it "takes name argument" do
      expect(set.level("Research Fellow")).to eq :gold
    end
  end

  describe "#level_index" do
    it "takes key argument" do
      expect(set.level_index(:research_fellow)).to eq 2
    end

    it "takes name argument" do
      expect(set.level_index("Research Engine")).to eq 1
    end
  end

  describe "#change_thresholds" do
    context "called with threshold list" do
      it "changes thresholds" do
        set.change_thresholds 1, 3, 4
        expect(set.to_h(:threshold))
          .to eq researcher: 1, research_engine: 3, research_fellow: 4
      end
    end

    context "called with hash" do
      it "changes thresholds" do
        set.change_thresholds research_engine: 10
        expect(set.to_h(:threshold))
          .to eq researcher: 1, research_engine: 10, research_fellow: 5
      end
    end
  end
end
