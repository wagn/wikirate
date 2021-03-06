format :html do
  # NOCACHE because preview_source is altered by params / instance vars
  view :source_preview_tab, cache: :never do
    wrap do
      nest preview_source, view: :source_and_preview
    end
  end

  # NOCACHE because view is altered by params / instance vars
  view :right_side_tabs, cache: :never do
    tab_hash = {}
    tab_hash["Sources"] = sources_tab if citable?
    tab_hash["Methodology"] = metric_details_tab if metric?
    tab_hash["Help"] = nest(:how_to_research, view: :content) if citable?
    tabs tab_hash, params[:active_tab], pane_attr: { class: "p-3" }
  end

  def citable?
    return @citable unless @citable.nil?
    @citable = (metric? && company? && Card[metric]&.researchable?)
  end

  def cite_mode?
    answer_card.unknown? ||
      @answer_view.in?(%i[research_edit_form research_form])
  end

  def sources_tab
    project # make sure instance variable is set
    nest answer_card, view: :source_tab
  end

  # def view_source_tab hide: false
  #   hide_tab _render_source_preview_tab, hide
  # end

  def metric_details_tab
    nest metric, view: :main_details,
                 hide: [:add_value_buttons, :import_button, :about]
  end
end
