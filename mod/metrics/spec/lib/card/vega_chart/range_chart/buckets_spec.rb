RSpec.describe Card::VegaChart::RangeChart::Buckets do
  MIN = 582_603
  MAX = 5_613_573

  def buckets lower, upper
    buck = Class.new
    buck.extend Card::VegaChart::RangeChart::Buckets
    buck.instance_eval { @buckets = 10 }
    buck.define_singleton_method(:max) { upper }
    buck.define_singleton_method(:min) { lower }
    buck
  end

  def bucket_ranges min, max
    mid = be_between min, max
    [[eq(min), mid, be_falsey]] +
      ([[mid, mid, be_falsey]] * 8) +
      [[mid, be_between(max, max + 100_000).inclusive, be_truthy]]
  end

  describe "#each_bucket" do
    it "creates 10 buckets" do
      puts MIN
      expect { |probe| buckets(MIN, MAX).each_bucket(&probe) }
        .to yield_control.exactly(10).times
    end

    it "calculates correctly" do
      puts MIN
      expect { |probe| buckets(MIN, MAX).each_bucket(&probe) }
        .to yield_successive_args(*bucket_ranges(MIN, MAX))
    end

    context "with negative values" do
      MIN = -500_000
      MAX = 50_600_000

      it "calculates correctly" do
        puts MIN
        expect { |probe| buckets(MIN, MAX).each_bucket(&probe) }
          .to yield_successive_args(*bucket_ranges(MIN, MAX))
      end
    end
  end
end
