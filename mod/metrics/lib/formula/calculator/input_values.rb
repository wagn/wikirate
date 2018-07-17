module Formula
  class Calculator
    # It finds all metric values and yearly values that are related to the
    # the metrics and yearly variables of a formula and prepares the values
    # for calculating the formula values
    # The key method is #each that iterates over all
    # company and year combination that could possible get a calculated value
    # and provides the input data for the calculation
    class InputValues
      InputItem = Struct.new(:card_id, :type)

      # @param [Array<Card>] input_cards all cards that are part of the formula
      # @param [Symbol] requirement either :all or :any
      def initialize input_cards, requirement
        @all_fetched = false
        @companies_with_values_by_year = Hash.new_nested ::Set
        @requirement = requirement
        @input_list = initialize_input_list input_cards
        @value_store = ValueStore.new @input_list
      end

      # @param company_id [Integer]
      # @param year [Integer]
      def each company_id: nil, year: nil, &block
        if company_id && year
          result company_id, year, &block
        elsif year
          each_company_with_value year, &block
        elsif company_id
          each_year_with_value company_id, &block
        else
          each_company_and_year_with_value(&block)
        end
      end

      def each_company_and_year_with_value &block
        fetch_values
        years_with_values.each do |year|
          companies_with_value(year).each do |company_id|
            result company_id, year, &block
          end
        end
      end

      def each_year_with_value company_id, &block
        years_with_values.each do |year|
          result company_id, year, &block
        end
      end

      def each_company_with_value year, &block
        companies_with_value(year).each do |company_id|
          result company_id, year, &block
        end
      end

      def result company_id, year
        values = fetch company: company_id, year: year
        yield values, company_id, year
      end

      def fetch_all
        fetch_values
      end

      # @return input values to calculate values for the given company
      #   If year is given it returns an array with one value for every input card,
      #   otherwise it returns an array with a hash for every input card. The hashes
      #   contain a value for every year.
      def fetch company:, year:
        company = Card.fetch_id(company) unless company.is_a? Integer

        fetch_values company_id: company, year: year

        @input_list.map do |input_item|
          @value_store.get input_item.card_id, company, year
        end
      end

      def years_with_values
        fetch_values
        @companies_with_values_by_year.keys
      end

      # type of input
      # either :yearly_variable or, if it's a metric, the value type as string
      def type index
        @input_list[index].type
      end

      def card_id index
        @input_list[index].card_id
      end

      private

      def companies_with_value year
        fetch_values year: year
        @companies_with_values_by_year[year].to_a
      end

      # all values by year for one single input card
      def values_by_year input_item, company
        value_store.get input_item.card_id, company
      end

      def fetch_values company_id: nil, year: nil
        return if @all_fetched
        @all_fetched ||= company_id.nil? && year.nil?

        while_full_input_set_possible company_id do |input_item|
          fetch_value input_item, year
        end
        clean_companies_with_value_by_year
      end

      def initialize_input_list input_cards
        input_cards.compact.map do |input_card|
          InputItem.new(input_card.id, input_type(input_card))
        end
      end

      def input_type input_card
        case input_card.type_id
        when Card::MetricID
          input_card.value_type
        when Card::YearlyVariableID
          :yearly_value
        end
      end

      def fetch_value input_item, year
        case input_item.type
        when :yearly_value
          yearly_value_fetch input_item.card_id
        else
          answer_fetch input_item.card_id, year
        end
      end

      def while_full_input_set_possible company_id=nil
        initialize_company_lists company_id
        @input_list.each do |input_item|
          yield input_item
          break if no_company_with_required_input_values?
        end
        @companies_with_values_by_year ||= Hash.new_nested ::Set
      end

      # return true if we know no company has
      def no_company_with_required_input_values?
        return false unless @requirement == :all
        @companies_with_values&.empty?
      end

      def initialize_company_lists company_id
        # nil as initialization is important here
        # nil means not yet searched for companies with values
        # empty means no companies with values for all input cards
        @companies_with_values = company_id ? ::Set.new([company_id]) : nil
      end

      # if a company definitely doesn't meet input requirements,
      # remove it completely
      def clean_companies_with_value_by_year
        @companies_with_values_by_year =
          @companies_with_values_by_year
          .to_a.each.with_object({}) do |(year, companies_by_year), h|
            h[year] = applicable_companies companies_by_year, @companies_with_values
          end
      end

      def applicable_companies set1, set2
        @requirement == :all ? set1 & set2 : set1 | set2
      end

      # Find answer for the given input card and cache the result.
      # If year is given look only for that year
      def answer_fetch input_card_id, year
        answers = input_answers input_card_id, year

        update_company_list answers.map(&:company_id)
        answers.each do |a|
          @value_store.add input_card_id, a.company_id, a.year, a.value
          @companies_with_values_by_year[a.year.to_i] ||= ::Set.new
          @companies_with_values_by_year[a.year.to_i] << a.company_id
        end
      end

      def yearly_value_fetch input_card_id
        v_cards = input_yearly_value_cards(input_card_id)
        v_cards.each do |vc|
          @value_store.add input_card_id, vc.year, vc.content
        end
      end

      def update_company_list company_ids
        company_ids = company_ids.to_set
        @companies_with_values =
          if @companies_with_values
            # remove all companies that don't have values for all input items
            applicable_companies @companies_with_values, company_ids
          else
            # first input item: add all company ids
            company_ids
          end
      end

      # Searches for all metric answers for the metric given by input_card_id.
      # If a year is given then the search will be restricted to that year
      # @param input_card_id
      # @param year
      def input_answers input_card_id, year
        Answer.where answer_query(input_card_id, year)
      end

      def input_yearly_value_cards yearly_variable_id
        ::Card.search type_id: Card::YearlyValueID,
                      left: { left_id: yearly_variable_id }
      end

      def answer_query input_card_id, year
        query = { metric_id: input_card_id }
        # search only for companies that still have a chance to reach a complete set
        # of input values for at least one year.
        if @companies_with_values.present? && @requirement == :all
          query[:company_id] = @companies_with_values.to_a
        end
        query[:year] = year.to_i if year
        query
      end
    end
  end
end
