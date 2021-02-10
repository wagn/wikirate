module Formula
  class Calculator
    class InputItem
      module Options
        module CompanyOption
          # Used if a "Related" search expression is passed as company option
          # Example:
          #   {{ M1 | company: Related[M2 >= 6 && M3=Tier 1 Supplier] && M4 > 10 }}
          #
          # In contrast to the other company options {CompanyList} and {CompaanySinge},
          # this case is company dependent.
          module CompanySearch
            include CompanyDependentInput
            extend AddValidationChecks
            add_validation_checks :check_related_conditions

            def check_related_conditions
              CompanyQuery.new(company_option, nil).validate
            rescue Condition::Error => e
              add_error e.message
            end

            def each_answer_value
              relations.each_pair do |subject_company_id, years|
                years.each do |year, object_company_ids|
                  v = values_from_db object_company_ids, year
                  next unless v.present?

                  yield subject_company_id, year, v
                end
              end
            end

            def values_by_year_for_each_company
              hash = {}
              each_answer_value do |sc_id, y, v|
                hash[sc_id] ||= {}
                hash[sc_id][y] = v
              end
              hash.each_pair do |c_id, v_by_y|
                yield c_id, v_by_y
              end
            end

            # @return hash with format
            #   { subject_company_id => { year => Array<object_company_id> } }
            #   Each of these relations satifies the "Related" condition in the formula
            #   At this point we haven't checked if the input metric has actually an
            #   answer for these object_companies
            def relations
              @relations ||=
                CompanyQuery.new(company_option, search_space).relations
            end
          end
        end
      end
    end
  end
end
