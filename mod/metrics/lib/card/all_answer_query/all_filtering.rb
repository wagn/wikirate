class Card
  class AllAnswerQuery
    # handles the application of filters to the cards table
    # (as opposed to the answers lookup table.
    # that handling is in AnswerQuery::Filtering)
    module AllFiltering
      PARTNER_FILTER_QUERY = {
        company: CompanyFilterQuery, metric: MetricFilterQuery
      }.freeze
      PARTNER_CQL_FILTERS = {
        company: ::Set.new(%i[project country]),
        metric: ::Set.new(%i[project designer metric_type research_policy bookmark])
      }.freeze

      # TEMPORARY HACK.  replace with metric lookup
      def metric_name_query value
        @card_ids = Card.search(type_id: Card::MetricID,
                                right: { name: [:match, value] },
                                return: :id)
      end

      private

      def process_filter_option key, value
        return super unless PARTNER_CQL_FILTERS[@partner].include? key

        @cql_filter[key] = value
      end

      def filter key, value, operator=nil
        return super unless (partner_column = partner_field_map[key])

        condition = "#{@partner}.#{partner_column} #{op_and_val operator, value}"
        add_card_condition condition, value
      end

      def add_card_condition condition, value
        @card_conditions << " #{condition} "
        @card_values << value
      end

      # map answer fields to partner card fields
      def partner_field_map
        @partner_field_map ||= %i[id name].each_with_object({}) do |fld, hash|
          hash["#{@partner}_#{fld}".to_sym] = fld
        end
      end

      def card_conditions
        add_card_condition "#{@partner}.id IN (?)", @card_ids if @card_ids.present?
        @card_conditions << " #{@partner}.id IN (#{cql_subquery})" if @cql_filter.present?
        condition_sql([@card_conditions.join(" AND ")] + @card_values)
      end

      # most metric and company constraints are handled in a cql subquery
      def cql_subquery
        statement = PARTNER_FILTER_QUERY[@partner].new(@cql_filter).to_cql
        Card::Auth.as_bot do
          cq = Card::Query.new statement.merge(return: :id), ""
          cq.define_singleton_method(:full?) { false }
          cq.sql
        end
      end

      def restrict_lookup_ids col, ids
        return super unless col == partner_id_col
        @card_ids = @card_ids.any? ? (@card_ids & ids) : ids
      end

      def partner_id_col
        @partner_id_col ||= "#{@partner}_id".to_sym
      end

      # we left join cards to answers. if answers.id is nil, then answer is not researched
      def handle_not_researched
        @card_conditions << "answers.id is null" if @filter_args[:status].to_sym == :none
      end

      def not_researched!
        @card_conditions << "answers.id is null"
      end

    end
  end
end
