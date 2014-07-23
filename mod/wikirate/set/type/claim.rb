# changes label of name on claims (should be obviatable)

format :html do
  view :name_fieldset do |args|
    #rename "name" to "Claim"
    #add a div for claim word counting
    %{
      #{ fieldset 'Claim', raw( name_field form ), :editor=>'name', :help=>true }
      <div class='claim-counting'>
        <span class='claim-counting-number'>100</span> character(s) left
      </div>
    }   
  end
  
  
  view :new do |args|
    #hide all help text under title 
    super args.merge( :optional_help => :hide )
  end
  
  def edit_slot args
    # :core_edit means the new and edit views will render form fields from within the core view
    # (which in this case is defined by Claim+*type+*structure), as opposed to the default behavior,
    # which is to strip out the inclusions and render them alone.
    super args.merge( :core_edit=>true )
  end

  
  view :tip, :perms=>:update do |args|
    # special view for prompting users with next steps
    if tip = args[:tip] || next_step_tip
      %{
        <div class="claim-tip">
          Tip: You can #{ tip }
          <span id="close-tip" class="fa fa-times-circle"></span>
        </div>
      }
    end.to_s
  end
  
  def next_step_tip
    if (not topics = Card["#{card.name}+topics"]) || topics.item_names.empty?
      "improve this claim by adding a topic."
    elsif (not companies = Card["#{card.name}+company"]) || companies.item_names.empty?
      "improve this claim by adding a company."
    else
      cited_in = Card.search :refer_to => card.name, :left=>{:type=>'Analysis'}, :right=>{:name=>'article'}
      if card.analysis_names.size > cited_in.size
        "cite this claim in related articles."
      end
    end
  end
  
  view :sample_citation do |args|
    tip = "easily cite this claim by pasting the following:" +
      text_area_tag( :citable_claim, card.default_citation )
    %{ <div class="sample-citation">#{ render :tip, :tip=>tip }</div> }
  end

end


def analysis_names
  if topics   = Card["#{name}+#{Card[:wikirate_topic  ].name}"] and 
    companies = Card["#{name}+#{Card[:wikirate_company].name}"]
    
    companies = companies.item_cards.reject { |c| c.new_card? || c.type_id != Card::WikirateCompanyID }
    topics    = topics   .item_cards.reject { |c| c.new_card? || c.type_id != Card::WikirateTopicID   }
    
    companies.map do |company|
      topics.map do |topic|
        "#{company.name}+#{topic.name}"
      end
    end.flatten
  end
end

event :reset_claim_counts, :after=>:store do
  Card.reset_claim_counts
end


event :validate_claim, :before=>:approve, :on=>:save do 
  source_card = subcards["+source"]
  if !source_card 
    errors.add :link, "is empty" 
  else
    if source_card[:type_id] != Card::WebpageID
      errors.add :link, "is pointing to invalid page" 
    end
  end
   
  errors.add :claim, "is too long (100 character maximum)" if name.length > 100
end

view :missing do |args|
  _render_link args
end

view :title do |args|
  %{ 
    #{ args[:citation_number] }
    #{ super args }
    #{ optional_render :clipboard, args, :hide }
  }
end

view :clipboard do |args|
  %{
    <i class="fa fa-clipboard claim-clipboard" id="copy-button" title="copy claim citation to clipboard" data-clipboard-text="#{h card.default_citation}"></i>
  }
end


def default_citation
  "#{name} {{#{name}|cite}}"
end

=begin
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
=end
