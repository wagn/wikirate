class WolframFormula < Formula
  WL_INTERPRETER = 'https://www.wolframcloud.com/objects/92f1e212-7875-49f9-888f-b5b4560b7686'

  def get_value year, _metrics_with_values, i
    @executed_lambda[year.to_s][i]
  end

  # convert formula to a Wolfram Language expression
  # Example:
  # For formula {{metric M1}}+{{metric M2}} and two companies C1 and C1 with
  # values in 2014 and 2015:
  # M1+C1+2014 = 11.14, M2+C1+2014 = 21.14
  # M1+C1+2015 = 11.15, M2+C1+2015 = 21.15
  # M1+C2+2014 = 12.14, M2+C2+2014 = 22.14
  # M1+C2+2015 = 12.15, M2+C2+2015 = 22.15
  # create the followng expression in Wolfram Language
  # Apply[(#1+#2)&,<|2014 -> {{11.14, 21.14}, {12.14, 22.14}},
  #                 2015 -> {{11.15, 21.15}, {12.15, 22.15}}|>, {2}]
  # The result Wolfram is a hash with an array for every year that contains
  # the values for all companies
  # <|2014 -> {32.28, 34.28}, 2015 -> {32.30, 34.30}|>

  def to_lambda
    wl_formula = @formula.keyified
    metrics.each_with_index do |metric, i|
      # indices in Wolfram Language start with 1
      wl_formula.gsub!("{{#{ metric }}}", "##{ i + 1 }")
    end

    year_str = []
    @formula.input_values.each_pair do |year, companies|
      company_str = []
      companies.each do |_company, metrics_with_values|
        values = metrics.map do |metric|
          if Card[metric].number_values?
            metrics_with_values[metric]
          else
            "\"#{metrics_with_values[metric]}\""
          end
        end.compact
        next if values.size != metrics.size
        company_str << "{#{values.join(',')}}"
      end
      year_str << "\"#{year}\" -> {#{company_str.join ','}}"
    end
    wl_input = year_str.join ','

    "Apply[(#{wl_formula})&,<| #{wl_input} |>,{2}]"
  end

  protected

  def exec_lambda expr
    uri = URI.parse(WL_INTERPRETER)
    # TODO: error handling
    response = Net::HTTP.post_form uri, 'expr' => expr

    begin
      body = JSON.parse(response.body)
      if body['Success']
       result = JSON.parse body['Result']
      else
        # TODO: this is a syntax error in the wolfram formula
        # and shouldn't be fatal
        # need a way to pass that to errors
        fail Card::Error, 'wolfram error', body['MessagesText'].join("\n")
      end
    rescue JSON::ParserError => e
      fail Card::Error, "failed to parse wolfram result: #{expr}"
    end
  end

  def safe_to_exec? expr
    true
  end
end