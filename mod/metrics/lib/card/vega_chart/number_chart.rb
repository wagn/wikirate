class Card
  class VegaChart
    # Company count charts with one bar per (numeric) value
    class NumberChart < VerticalBars
      def generate_data
        @filter_query.count_by_group(:numeric_value).each do |num, count|
          next unless num
          add_data({ numeric_value: num }, count)
        end
      end

      private

      def data_item_hash filter, _count
        super.merge x: @format.humanized_number(filter[:numeric_value])
      end

      def x_axis
        super.merge title: "Values"
      end

      # @return true if the bar given by its filter
      #   is supposed to be highlighted
      def highlight? filter
        return true unless @highlight_value
        @highlight_value.to_d == filter[:numeric_value]
      end
    end
  end
end
