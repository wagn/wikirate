class Card
  class VegaChart
    # Vega visualizations for single metrics
    class SingleMetric < VegaChart
      class << self
        def new format, metric_card, opts={}
          return super unless self == SingleMetric

          chart_class = metric_card.chart_class opts.delete(:horizontal)
          const_get(chart_class.to_s.camelize).new format, metric_card, opts
        end
      end

      attr_reader :metric_card, :format

      # @param opts [Hash] config options
      # @option opts [String] :highlight highlight the bar for the given value
      # @option opts [Hash] :layout override DEFAULT_LAYOUT
      # @option opts [:light/:dark] :axes color of axes, labels and titles
      def initialize format, metric_card, opts={}
        @format = format
        @metric_card = metric_card
        # @filter_query = format.chart_filter_query
        @highlight_value = opts[:highlight]
        @layout = opts.delete(:layout) || {}
        @labels = []
        @opts = opts
        #  generate_data
      end

      def hash
        layout
      end
    end
  end
end
