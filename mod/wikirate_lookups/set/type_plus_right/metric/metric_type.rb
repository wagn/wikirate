event :update_metric_lookup_metric_type_id, :finalize, changed: :content do
  ::Metric.find_by_card_id(left_id).refresh :metric_type_id unless left.action == :create
end
