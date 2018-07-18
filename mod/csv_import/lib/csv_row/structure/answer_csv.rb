class CSVRow
  module Structure
    # Specifies the structure of a csv row a metric answer import.
    class AnswerCSV < CSVRow
      require_dependency "csv_row"
      require_dependency "csv_row/source_import"

      include CSVRow::SourceImport
      include CSVRow::CompanyImport
      include CSVRow::AnswerImport

      @columns = [:metric, :company, :year, :value, :source, :comment]
      @required = [:metric, :company, :year, :value, :source]

      def initialize row, index, import_manager=nil
        super
        # use only the source value for creating the source
        # TODO: consider to add company to source args
        @source_args = { source: @row[:source] }
      end

      def import
        ImportLog.debug "answer import: #{@row}"
        ensure_source_and_company
        import_answer
      end

      def validate_metric metric
        check_existence_and_type metric, Card::MetricID, "metric"
        true
      end

      def validate_year year
        check_existence_and_type year, Card::YearID, "year"
        true
      end

      private

      def ensure_source_and_company
        import_manager.with_conflict_strategy :skip_card do
          import_source
          import_company
        end
      end

      def import_source
        ImportLog.debug "  importing source:"
        @row[:source] = super
        ImportLog.debug "  #{@row[:source]}"
        @row[:source]
      end

      def import_company company_key=:company
        ImportLog.debug "  importing company:"
        @row[company_key] = super
        ImportLog.debug "  #{@row[company_key]}"
        @row[company_key]
      end

      def check_existence_and_type name, type_id, type_name=nil
        if !Card.exists?(name)
          error "\"#{name}\" doesn't exist"
        elsif Card[name].type_id != type_id
          error "\"#{name}\" is not a #{type_name}"
        end
      end

      def resolve_source_duplicates existing_source_card
        existing_source_card
      end
    end
  end
end
