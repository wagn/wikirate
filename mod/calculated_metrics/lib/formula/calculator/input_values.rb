module Formula
  class Calculator
    # It finds all answer values and yearly values that are related to the
    # the metrics and yearly variables of a formula and prepares the values
    # for calculating the formula values
    # The key method is #each that iterates over all
    # company and year combination that could possible get a calculated value
    # and provides the input data for the calculation
    class InputValues
      include Results

      attr_reader :input_cards, :result_space, :parser, :input_list, :result_cache

      delegate :no_mandatories?, :validate, to: :input_list

      # @param [Formula::Parser] parser
      def initialize parser
        @parser = parser
        @input_cards = parser.input_cards
        @result_cache = ResultCache.new
        @input_list = InputList.new @parser
      end

      # Iterates over results.
      # yields value Array, company_id, and year (as integer) for each result
      #
      # @param :companies [Integer, Array] only yield input for given companies
      # @param :years [String, Integer, Array] :year only yield input for given years
      def each companies: nil, years: nil, &block
        if companies && years
          results_for_companies_and_years companies, years, &block
        elsif years
          results_for_years years, &block
        elsif companies
          results_for_companies companies, &block
        else
          all_results(&block)
        end
      end

      # @return answer objects for a given company and year
      def answers company_id, years
        array = []
        @input_list.sort.each do |input_item|
          input_item.search_space = SearchSpace.new company_id, years
          array += input_item.answers.map.to_a
        end
        array.uniq
      end

      # @return Array[String] simple input values for the given company and year
      def fetch company:, year:
        company = Card.fetch_id(company) unless company.is_a? Integer

        search_values_for company_id: company, year: year
        return unless @result_cache.has_value? company, year

        catch(:cancel_calculation) do
          @input_list.map do |input_item|
            input_item.value_for company, year
          end
        end
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

      def search_values_for company_id: nil, year: nil
        while_full_input_set_possible company_id, year do |input_item, result_space|
          input_item.search_value_for result_space, company_id: company_id, year: year
        end
      end

      # this is called from tests. not sure about intent for other uses ?
      def full_search
        search_values_for
      end

      def while_full_input_set_possible company_id=nil, year=nil
        @result_cache.track_search company_id, year, no_mandatories? do |result_space|
          # subtle but IMPORTANT:
          # The "sort" call puts all items without non_researched option in front.
          # This way the search space becomes restricted before we have to deal with input
          # items that have a default value for the whole company-year-space.
          @input_list.sort.each do |input_item|
            yield input_item, result_space
            # skip remaining input items if there are no candidates left that can have
            # values for all input items
            break if result_space.run_out_of_options?
          end
        end
      end
    end
  end
end
