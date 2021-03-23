# encoding: UTF-8

module Formula
  # Calculates the values of a formula
  #
  # Calculator.new(parser, value_normalizer)
  class Calculator
    attr_reader :errors, :input

    # All the answers a given calculation depends on
    # (same opts as #result)
    # @return [Array] array of Answer objects
    delegate :answers, to: :input

    # @param parser [Formula::Parser]
    # @param opts [Hash]
    # @option opts [Symbol] :cast
    # @option opts [Symbol] :cast
    def initialize parser, opts={}
      @value_normalizer = opts[:value_normalizer]
      @parser = parser
      @parser.send opts[:parser_method] if opts[:parser_method]
      @input = initialize_input opts[:cast]
      @errors = []
    end

    # Calculates answers
    # If a company or a year is given it calculates only answers only for those
    # @param [Hash] opts
    # @option opts [String] :company
    # @option opts [String] :year
    # @return [Hash] { year => { company_id => value } }
    def result opts={}
      result_hash do |result|
        each_input(opts) do |input, company, year|
          next unless (value = value_for_input input, company, year)
          result[year][company] = value
        end
      end
    end

    # The scope of results that would be calculated for given result options
    # (but without the actual calculated value)
    # @param [Hash] opts
    # @option opts [String] :company
    # @option opts [String] :year
    # @return [Array] [company_id1, year1], [company_id2, year2], ... ]
    def result_scope opts={}
      [].tap do |res|
        each_input opts do |_input, company_id, year|
          res << [company_id, year]
        end
      end
    end

    # All the inputs for a given answer (the calculator implies the metric)
    # @param [Integer, String, Card] company (any company mark)
    # @param [String] year four-digit year
    # @return [Array] [[metric_card_1, value_1, year_options_1], [metric_card2...], ...]
    def inputs_for company, year
      @parser.input_cards.zip(
        Array.wrap(@input.input_for(company, year)), @parser.year_options
      )
    end

    # The formula for a given answer (the calculator implies the metric)
    # @param [Integer, String, Card] company (any company mark)
    # @param [String] year four-digit year
    # @param [Proc] block . Block that can handle three args:
    #     1: raw input value
    #     2. input metric card
    #     3. the year option
    # @return [String] the formula with nests replaced by the result of the given block
    def formula_for company, year, &block
      input = @input.input_for company, year
      case input
      when :unknown
        "Unknown"
      when nil
        "No value"
      else
        formula_with_nests input, &block
      end
    end

    def formula
      @formula ||= @parser.formula
    end

    # @return list of errors
    def detect_errors
      @errors = []
      compile_formula
      @errors
    end

    class << self
      def remove_nests content
        content.gsub(/{{[^}]*}}/, "")
      end

      def remove_quotes content
        content.gsub(/"[^"]+"/, "")
      end
    end

    private

    def each_input opts
      @input.each(opts) do |input, company, year|
        yield input, company, year
      end
    end

    def formula_with_nests input
      input_enum = input.each
      replace_nests do |index|
        yield input_enum.next, @parser.input_cards[index], @parser.year_options[index]
      end
    end

    def initialize_input cast
      if @parser.input_cards.any?(&:nil?)
        InvalidInput.new
      else
        Input.new @parser, (cast || default_cast)
      end
    end

    def safe_execution expr
      return if @errors.any?

      unless safe_to_exec?(expr)
        @errors << "invalid formula"
        return
      end
      exec_lambda expr
    end

    protected

    def default_cast
      :none
    end

    def compile_formula
      return unless safe_to_convert? formula
      @executed_lambda ||= safe_execution(to_lambda)
    end

    def replace_nests content=nil
      content ||= formula
      index = -1
      content.gsub(/{{[^{}]*}}/) do |_match|
        index += 1
        yield(index)
      end
    end

    def safe_to_convert? _expr
      true
    end

    def safe_to_exec? _expr
      false
    end

    def value_for_input input, company, year
      return "Unknown" if input == :unknown
      value = get_value input, company, year
      normalize_value value if value
    end

    def result_hash
      result = Hash.new_nested Hash
      yield result if compile_formula
      result
    end

    def normalize_value value
      @value_normalizer ? @value_normalizer.call(value) : value
    end
  end
end
