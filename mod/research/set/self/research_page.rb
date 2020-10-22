include_set Abstract::Media

def new_relic_label
  codename
end

format :html do
  def layout_name_from_rule
    :wikirate_two_column_layout
  end

  view :open do
    render_slot_machine
  end

  view :edit, cache: :never, wrap: :none do
    @answer_view = :research_edit_form
    render_slot_machine
  end

  view :content, cache: :never do
    _render_core
  end

  view :add_relation, cache: :never, unknown: true do
    @answer_view = :research_form
    slot_machine
  end

  view :core do
    render_slot_machine
  end

  view :slot_machine, template: :haml, wrap: :slot, perms: -> (_f) { Auth.signed_in? }

  def slot_machine opts={}
    %i[metric company related_company project year].each do |n|
      instance_variable_set "@#{n}", opts[n] if opts[n]
    end
    _render_slot_machine
  end
end
