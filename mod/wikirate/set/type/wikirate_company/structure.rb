include_set Abstract::WikirateTable
include_set Abstract::TwoColumnLayout

card_accessor :wikipedia

format :html do
  def active_profile_tab
    (profile = params[:company_profile]) ? profile.to_sym : default_profile_tab
  end

  def default_profile_tab
    @default_profile_tab ||=
      show_contributions_profile? ? :contributions : :performance
  end

  def tab_list
    list = { details_tab: two_line_tab("Details", fa_icon("info")) }
    list.merge! performance_tabs if active_profile_tab == :performance
    list
  end

  def performance_tabs
    {
      projects_tab: tab_count_title("Projects", :project),
      topics_tab: tab_count_title("Topics", :wikirate_topic),
      sources_tab: tab_count_title("Sources", :source)
    }
  end

  view :data do
    if active_profile_tab == :performance
      super()
    else
      contribution_data
    end
  end

  view :table do |args|
    metric_table
  end

  def header_right
    output [
      wrap_with(:h2, _render_title, class: "company-color"),
      _render_header_tabs
    ]
  end

  view :header_tabs, cache: :never do
    wrap_with :ul, class: "nav nav-tabs company-profile-tab" do
      [performance_tab_button, contributions_tab_button]
    end
  end

  def contribution_data
    output [_render_metric_contributions, _render_project_contributions]
  end

  def profile_tab key, label, args={}
    add_class args, :active if active_profile_tab == key
    wrap_with :li, args do
      link_to_card card, label, path: { company_profile: key }
    end
  end

  def performance_tab_button
    profile_tab :performance, "Performance"
  end

  def contributions_tab_button
    label_name = "Contributions"
    if contributions_made?
      profile_tab :contributions, label_name
    else
      disabled_tab = wrap_with :span, label_name
      wrap_with :li, disabled_tab, class: "disabled"
    end
  end

  # view :core do |args|
  #   tabs = [
  #     ["metric", "Metrics", "+metric+*cached count"],
  #     ["topic", "Topics", "+topic+*cached count"],
  #     #["topic", "Projects", "+topic+*cached count"],
  #     #["overview", "Reviews", "+analyses with overview+*cached count"],
  #     #["note", "Notes", "+Note+*cached count"],
  #     ["reference", "Sources", "+sources+*cached count"]
  #   ]
  #   wikirate_layout "company", tabs, render_contribution_link(args)
  # end

  view :topics_tab do
    process_content <<-HTML
      <div class="voting">
        {{_left+topic+novotee search|drag_and_drop|content;structure:company topic drag item}}
      </div>
    HTML
  end

  view :details_tab do |_args|
    bs_layout do
      row 12 do
        column wikipedia_extract
      end
      # row 12 do
      #   column _render_recent_editors
      # end
      # row 12 do
      #   column _render_overview_section
      # end
    end
  end

  def wikipedia_extract
    subformat(card.wikipedia_card)._render_titled
  end

  view :recent_editors do |_args|
    process_content <<-HTML
    <div class="row clearfix company-header-content" >
 			  <h5>{{_l+*contribution count|core}} Contributions about {{_l|name}}</h5>
 				<div class="col-md-6 column ">
 				  <small>Recent Editors</small>
 				  {{_l+contributors_3|hide:paging|content ;structure:recent editor item}}
 				</div>
 			</div>
    HTML
  end

  view :overview_section do |_args|
    field_nest(:general_overview, view: :titled_with_edits)
  end

  view :projects_tab do |_args|
    # FIXME
    process_content <<-HTML
    {{_l+initiatives 3|hide:paging|content ;structure:initiative item}}
    HTML
  end

  view :sources_tab do |_args|
    field_nest(:source, view: :content, items: { view: :listing })
  end

  view :filter do |args|
    field_subformat(:company_metric_filter)._render_core args
  end
end
