include_set Right::BrowseMetricFilter
include_set Type::SearchType

def type_id
  Card::SearchID
end

def pointer_mark
  name.left
end

def cql_content
  { type_id: Card::MetricID, referred_to_by: pointer_mark }
end

format do
  def default_sort_option
    "name"
  end
end
