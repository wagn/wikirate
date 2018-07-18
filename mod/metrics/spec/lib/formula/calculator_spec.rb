require_relative "../../support/formula_stub"

RSpec.describe Formula::Calculator do
  describe "#formula_for" do
    include_context "with formula stub"

    def calculator formula
      described_class.new(formula_card(formula))
    end

    example "relative year expression" do
      formula = "{{Joe User+researched number 1}} + " \
                "{{Joe User+researched number 2| year: -1}}"
      rendered_formula = calculator(formula).formula_for "Samsung", 2015
      expect(rendered_formula).to eq "5 + 5"
    end

    example "year range" do
      formula = "Sum[{{Joe User+researched number 1|year: -1..0}}] + "\
                "Max[{{Joe User+researched number 2| year: 2014..2015}}]"
      rendered_formula = calculator(formula).formula_for "Samsung", 2015
      expect(rendered_formula).to eq 'Sum[["10", "5"]] + Max[["5", "2"]]'
    end
  end
end
