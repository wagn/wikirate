# changes label of name on claims (should be obviatable)

format :html do
  view :name_fieldset do |args|
    %{
      #{ fieldset 'Claim', raw( name_field form ), :editor=>'name', :help=>true }
      <div class='claim-counting'>
        <span class='claim-counting-number'>100</span> character(s) left
      </div>
    } 
  
  end

  view :new do |args|
    args[:core_edit] = true
    args[:structure] = :quick_claim unless params['_Source']
    args[:optional_help] = :hide
    super args
  end

  view :edit do |args|
    super args.merge(
      :core_edit=>true
      )
  end

 
end

event :reset_claim_counts, :after=>:store do
  Card.reset_claim_counts
end

event :interpret_quick_claim_link, :before=>:process_subcards do
  @link_key = "+#{ Card[:wikirate_link].name }"
  if subcards.present?
    @link_source = subcards.delete @link_key
  end
end

event :process_quick_claim_source, :before=>:approve_subcards do
  if @link_source

    existing_page = Card.search(:type_id=>Card::WebpageID, :limit=>1, :right_plus=>[
      Card[:wikirate_link].name, { :content=>@link_source[:content] }]
    ).first
    
    source_card = existing_page || begin
      # create Page card
      subcards[:source] = Card.new :type_id=>Card::WebpageID,  :subcards=>{ @link_key => @link_source }
      subcards[:source].set_autoname #do this now so we know where to link.  need better mechanism!
      subcards[:source]
    end
    
    # create +Source pointer to page on claim card
    plus_source = "+#{Card[:source].name}"
    subcards[plus_source] = Card.new :name=>plus_source, :supercard=>self, :content=>"[[#{source_card.name}]]"
  end
end

event :sort_tags, :before=>:approve_subcards, :on=>:create do
  tag_key = "+tags" #FIXME - hardcoded card name
  if tags_card = subcards[tag_key]
    tags_card.item_names.each do |tag|
      if tag_card = Card.fetch( tag )
        if tagtype = tag_card.type_code and [ :wikirate_company, :wikirate_topic ].member?(tagtype)
          type_key = "+#{ Card[tagtype].name }"
          subcards[type_key] ||= Card.new :name=>type_key, :supercard=>self, :type_id=>Card::PointerID
          subcards[type_key].add_item tag
          tags_card.drop_item tag
        end
        
      end
    end
  end
end

event :validate_claim, :before=>:approve, :on=>:save do 
  errors.add :claim, "is too long (100 character maximum)" if name.length > 100
end

view :missing do |args|
  _render_link args
end



