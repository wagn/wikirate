module MigrationHelper
  def rename_card old_name, new_name
    # cap_old  = old_name.capitalize
    # cap_new  = new_name.capitalize
    # down_old = old_name.downcase
    # down_new = new_name.downcase
    # puts "Change name from '#{cap_old}' to '#{cap_new}'"
    # Card[cap_old].update_attributes! :name=>cap_new, :update_referencers=>true, :silent_change=>true
    # # don't change claim/note names
    # cards = Card.search :name=>['match',down_old], :not=>{:type=>'Note'}, :return=>:id
    # cards.select! { |ca| ca.name !~ /\+/ }  # no junctions
    # puts "Update #{cards.size} cards with '#{cap_old}' in the name"
    # cards.each do |card|
    #   new_name = card.name.gsub(cap_old, cap_new).gsub(down_old, down_new)
    #   card.update_attributes! :name=>new_name, :update_referencers=>true, :silent_change=>true
    # end
    #
    # double_check = []
    # ids = Card.search(:content=>['match',down_old], :return=>:id)
    # puts "Update #{ids.size} cards with '#{cap_old}' in the content"
    # ids.each do |id|
    #   content, type_id, name = Card.where(:id=>id).pluck(:db_content, :type_id, :name).first
    #   new_content = content.gsub(cap_old, cap_new).gsub(down_old, down_new)
    #   Card.update(id, :db_content=>new_content)
    #   if type_id == Card::BasicID || type_id == Card::PlainTextID
    #     double_check << "[[#{name}]]"
    #   end
    # end
    # Card.create! :name=>"used #{cap_old} in content", :type=>'pointer', :content=> double_check.join("\n")
  end
end
