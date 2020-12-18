# FIXME: Most of these methods should not be in an all set.
# Move to non-set module

# has to be called in finalize events so that in integrate stage all changes
# are collected in @updated_metric_answers and can be executed
# @param relationship_id [Integer] id of a relationship answer card in the cards table
# @param id [integer] id of a relationship in the relationship lookup table
def update_relationship id: nil, relationship_id: nil, metric_id: nil
  ids = relationship_ids_to_update id, relationship_id, metric_id
  update_relationships_now_or_later ids
end

def create_relationship relationship_id:
  # puts "create relationship".blue
  Relationship.create relationship_id
end

def delete_relationship relationship_id:
  Relationship.delete_for_card relationship_id
end

def update_relationships_now_or_later ids
  # puts "update relationship now or later".blue
  if act_finished_integrate_stage?
    Relationship.update_by_ids ids
  else
    act_card.act_based_refresh_of_relationship_lookup_entry ids
  end
end

def relationship_ids_to_update id, relationship_id, metric_id
  if metric_id
    Relationship.where(metric_id: metric_id).pluck :id
  elsif relationship_id
    Relationship.where(relationship_id: relationship_id).pluck :id
  else
    [id]
  end
end

def act_based_refresh_of_relationship_lookup_entry ids
  @updated_relationships ||= ::Set.new
  @updated_relationships.merge ids
end

event :refresh_updated_relationships, :integrate,
      after: :refresh_updated_answers, when: :updated_relationships? do
  Relationship.update_by_ids @updated_relationships
end

def updated_relationships?
  @updated_relationships.present?
end
