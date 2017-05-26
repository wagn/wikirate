require_relative "csv_import"
require_relative "relationship_answer"

class RelationshipAnswersCSV < CSVImport
  @columns = [:designer, :title, :company_1, :company_2, :year, :value, :source]

  def process_row row
    RelationshipAnswer.new(row).create
  end
end
