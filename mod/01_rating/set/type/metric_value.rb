card_accessor :value, type: :phrase

def year
  cardname.right
end

def metric_name
  cardname.left_name.left
end

def company_name
  cardname.left_name.right
end

def metric_card
  Card.fetch metric_name
end

def company_card
  Card.fetch company_name
end

def source_subcards new_source_card
  [new_source_card.subfield(:file), new_source_card.subfield(:text),
   new_source_card.subfield(:wikirate_link)]
end

def source_in_request?
  sub_source_card = subfield('source')
  return false if sub_source_card.nil? ||
                  sub_source_card.subcard('new_source').nil?
  new_source_card = sub_source_card.subcard('new_source')
  source_subcard_exist?(new_source_card)
end

def source_subcard_exist? new_source_card
  file_card, text_card, link_card = source_subcards new_source_card
  (file_card && file_card.attachment.present?) ||
    (text_card && text_card.content.present?) ||
    (link_card && link_card.content.present?)
end

# TODO: add #subfield_present? method to subcard API
def subfield_exist? field_name
  subfield_card = subfield(field_name)
  !subfield_card.nil? && subfield_card.content.present?
end

event :set_metric_value_name,
      before: :set_autoname, when: proc { |c| c.cardname.parts.size < 4 } do
  self.name = %w(metric company year).map do |name|
    content = remove_subfield(name).content
    content.gsub('[[', '').gsub(']]', '')
  end.join '+'
end

event :validate_metric_value_fields, before: :set_metric_value_name do
  %w(metric company year value).each do |name|
    unless subfield_exist?(name)
      errors.add :field, "Missing #{name}. Please check before submit."
    end
  end
end

event :create_source_for_metric_value, :validate, on: :create do
  create_source
end

event :create_source_for_updating_metric_value,
      :prepare_to_store,
      on: :update, when: proc { |c| c.source_in_request? } do
  create_source
end

def create_source
  value_card = remove_subfield('value')
  if (source_list = subfield('source'))
    remove_subfield('source')
    # clear_subcards
    source_card = get_source_card source_list
    if !source_card
      errors.add :source, "#{source_list.content} does not exist."
    elsif source_card.errors.empty?
      fill_subcards value_card, source_card
    else
      fill_errors source_card
    end
  else
    errors.add :source, 'does not exist.'
  end
end

def clone_subcards_to_hash subcards
  source_subcards = {}
  subcards.subcards.each_with_key do |subcard, _key|
    subcard_key = subcard.tag.key
    if subcard_key == 'file'
      source_subcards["+#{subcard_key}"] = { file: subcard.file.file,
                                             type_id: subcard.type_id }
    else
      source_subcards["+#{subcard_key}"] = { content: subcard.content,
                                             type_id: subcard.type_id }
    end
  end
  source_subcards
end

def get_source_card source_list
  with_sourcebox do
    if (new_source_card = source_list.subcard('new_source'))
      if (url = new_source_card.subfield(:wikirate_link)) &&
         (source_card = find_duplicate_source(url.content))
        source_card
      else
        source_subcards = clone_subcards_to_hash new_source_card
        source_card = add_subcard '', type_id: SourceID,
                                      subcards: source_subcards
        source_card.director.catch_up_to_stage :prepare_to_store
        source_card
      end
    else
      Card[source_list.content]
    end
  end
end

def find_duplicate_source url
  (link_card = Card::Set::Self::Source.find_duplicates(url).first) &&
    link_card.left
end

def with_sourcebox
  Env.params[:sourcebox] = 'true'
  result = yield
  Env.params[:sourcebox] = nil
  result
end

def fill_errors source_card
  source_card.errors.each do |key, value|
    errors.add key, value
  end
end

def fill_subcards metric_value, source_card
  add_subcard '+value', content: metric_value.content, type_id: PhraseID
  add_subcard '+source', content: "[[#{source_card.name}]]",
                         type_id: PointerID
end

format :html do
  view :new do |args|
    # return super(args)
    return _render_no_frame_form args if Env.params[:noframe]
    # return super(args) if args[:source] || args[:metric] || args[:company]
    return super(args) if args[:source] || args[:company]
    @form_root = true

    frame args do # no form!
      [
        _optional_render(:content_formgroup,
                         args.merge(metric_value_landing: true))
        #  _optional_render(:button_formgroup, button_args)
      ]
    end
  end

  view :editor do |args|
    if args[:company] && args[:metric]
      _render_metric_company_add_value_editor args
    # elsif args[:source] || args[:metric]
    #   _render_add_value_editor args
    elsif args[:metric_value_landing]
      _render_metric_value_landing args
    else
      super(args.merge(edit_fields: '+value'))
    end
  end

  view :metric_value_landing do |args|
    metric_field = _render_metric_field(args)
    render_haml source_container: _render_source_container,
                metric_field: metric_field do
      <<-HAML
.col-md-6.border-right.panel-default
  %h4
    Company
  %hr
    = field_nest :wikirate_company, title: ''
  %h4
    Metric
  %hr
    = metric_field
= source_container
      HAML
    end
  end

  view :metric_field do |args|
    metric = args[:metric]
    metric_field =
      Card.fetch(card.cardname.field(:metric), new: { content: metric })
    render_haml metric: metric,
                source_container: _render_source_container,
                metric_field: metric_field do
      <<-HAML
= nest metric_field, title: ''
.col-md-6.col-centered.text-center
  %a.btn.btn-primary._new_value_next
    Next
      HAML
    end
  end

  view :source_container do |_args|
    render_haml do
      <<-HAML
.col-md-6.nopadding.panel-default
  .col-md-6.col-centered.text-center.light-grey-color-2
    %p
      Source Preview Container
    %p
      Please select a company and metric to add new sources and metric values.
      HAML
    end
  end

  view :no_frame_form do |args|
    form_opts = args[:form_opts] ? args.delete(:form_opts) : {}
    form_opts[:hidden] = args.delete(:hidden)
    form_opts['main-success'] = 'REDIRECT'
    card_form :create, form_opts do
      output [
        _optional_render(:name_formgroup, args),
        _optional_render(:type_formgroup, args),
        _optional_render(:content_formgroup, args),
        _optional_render(:button_formgroup, args)
      ]
    end
  end

  view :add_value_editor do |_args|
    render_haml do
      <<-HAML
= field_nest :metric, title: 'Metric' unless args[:metric]
= field_nest :wikirate_company, title: 'Company'
.fluid-container
  .row
    .col-xs-2
      = field_nest :year, title: 'Year'
    .col-xs-10
      = field_nest :value, title: 'Value'
    end
= field_nest :wikirate_source, title: 'Source' if args[:metric]
      HAML
    end
  end

  view :metric_company_add_value_editor do |_args|
    render_haml do
      <<-HAML
.td.year
  = field_nest :year, title: 'Year'
.td.value
  %span.metric-value
    = field_nest :value, title: 'Value'
  = field_nest :discussion, title: 'Comment'
  %h5
    Choose Sources or
    %a.btn.btn-sm.btn-default._add_new_source
      %small
        %span.icon.icon-wikirate-logo-o.fa-lg
        Add a new Source
  .relevant-sources
    None
  %h5
    Cited Sources
  .cited-sources
    None
  HAML
    end
  end

  def set_hidden_args args
    if !args[:source]
      # TODO: add appropriate view to the following condition.
      view = (args[:metric] || args[:company]) ? :timeline_data : :timeline_data
      args[:hidden] = {
        :success => { id: '_self', soft_redirect: true, view: view },
        'card[subcards][+metric][content]' => args[:metric]
      }
    else
      args[:hidden] = {}
    end
  end

  def default_new_args args
    set_hidden_args args
    if args[:company]
      args[:hidden]['card[subcards][+company][content]'] = args[:company]
    end
    if args[:source]
      args[:hidden]['card[subcards][+source][content]'] = args[:source]
    end
    args[:title] = "Add new value for #{args[:metric]}" if args[:metric]
    super(args)
  end

  # def edit_slot args
  #   super args.merge(core_edit: true)
  # end

  def legend args
    subformat(card.metric_card)._render_legend args
  end

  view :concise do |args|
    <<-HTML
      <span class="metric-year">
        #{card.year} =
      </span>
      #{_render_modal_details(args)}
      <span class="metric-unit">
        #{legend(args)}
      </span>
      HTML
  end

  view :modal_details do |args|
    modal_link = subformat(card)._render_modal_link(
      args.merge(
        text: card.value,
        path_opts: { slot: { show: :menu, optional_horizontal_menu: :hide } }
      )
    ) # ,:html_args=>{:class=>"td year"}))
    <<-HTML
      <span class="metric-value">
        #{modal_link}
      </span>
      HTML
  end

  view :timeline_data do |args|
    # container elements
    value =  _render_modal_details(args)
    value << content_tag(:span, legend(args), class: 'metric-unit')
    value << _render_value_details_toggle
    value << _render_value_details(args)

    # stitch together
    wrap_with :div, class: 'timeline-row' do
      [
        _render_year,
        content_tag(:div, value.html_safe, class: 'td value')
      ]
    end
  end

  view :year do
    year = content_tag(:span, card.cardname.right)
    year << content_tag(:div, '', class: 'timeline-dot')
    content_tag(:div, year.html_safe, class: 'td year')
  end

  view :value_details do |args|
    wrap_with :div, class: 'metric-value-details collapse' do
      [
        _optional_render(:credit_name, args, :show),
        content_tag(:div, _render_comments, class: 'comments-div'),
        content_tag(:div, _render_sources, class: 'cited-sources')
      ]
    end
  end

  view :value_details_toggle do
    content_tag(:i, '', class: 'fa fa-caret-right '\
                                'fa-lg margin-left-10 '\
                                'btn btn-default btn-sm ',
                        data: { toggle: 'collapse-next',
                                parent: '.value',
                                collapse: '.metric-value-details'
                              }
               )
  end

  view :sources do
    heading = content_tag(:h5, 'Cited')
    sources = card.fetch trait: :source
    heading << subformat(sources).render_core(item: :cited).html_safe
  end

  view :comments do
    comments = (disc_card = card.fetch trait: :discussion) &&
               subformat(disc_card).render_core.html_safe
    heading = content_tag(:h5, 'Discussion')
    heading << comments
  end

  view :credit_name do |args|
    wrap_with :div, class: 'credit' do
      [
        nest(card, view: :core, structure: 'creator credit'),
        _optional_render(:source_link, args, :hide)
      ]
    end
  end

  view :source_link do |_args|
    if (source_card = card.fetch(trait: :source))
      source_card.item_cards.map do |i_card|
        subformat(i_card).render_original_icon_link
      end.join "\n"
    else
      ''
    end
  end
end
