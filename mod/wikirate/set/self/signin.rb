include Card::Set::Abstract::Calculation

format :html do

  def default_title_args args
    args[:title] ||= 'Log in'
  end


  def default_core_args args={}
    args[:buttons] = button_tag 'Log in'
    if Card.new(:type_id=>Card::SignupID).ok? :create
      args[:buttons] += link_to( '...or Join!', card_path("account/signup"))
    end
    args[:buttons] += raw("<div style='float:right'>#{ view_link 'RESET PASSWORD', :edit, :path_opts=>{:slot=>{:hide=>:toolbar}} }</div>") #FIXME - hardcoded styling
    args
  end
end
