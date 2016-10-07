format :html do
  view :timeline do |args|
    timeline = output [
      (wrap_with :div, class: "pull-left timeline-data" do
        [
          _optional_render(:timeline_header, args.merge(column: :data), :show),
          (search_results.map.with_index do |res, i|
            subformat(res).render_timeline_data(
              args.merge(connect: i < search_results.size - 1)
            )
          end.join "\n")
        ]
      end)
    ]
    <<-HTML
      <div class="timeline container">
        <div class="timeline-body">
          #{timeline}
        </div>
      </div>
      HTML
  end

  view :timeline_add_new_link do |args|
    modal_link_args = args.merge(
      link_text: "+ Add New Value",
      link_opts: {
        class: "btn btn-default btn-sm",
        path: { action: :new, mark: :metric_value,
                slot: { company: card.cardname.left_name.tag,
                        metric: card.cardname.left_name.trunk } }
      }
    )
    timeline_head _render_modal_link(modal_link_args), "new"
  end

  view :timeline_header_buttons do
    btn_class = "btn btn-sm btn-default margin-12"
    btn_add_class = [btn_class, "_add_new_value", "btn-primary"].join(" ")
    path = card.left.field("metric_details").cardname.url_key
    target_str = ["[id='", path, "'] #methodology-info"].join("")
    metric_card_type = card.left.trunk.metric_type.downcase.to_sym
    btn_add =
      content_tag(:a, "Add answer",
                  class: btn_add_class,
                  data: {
                    company: card.cardname.left_name.right_name.url_key,
                    metric: card.cardname.left_name.trunk_name.url_key,
                    toggle: "collapse-next",
                    parent: ".timeline-data",
                    collapse: ".metric_value_form_container"
                  }
                 )
    btn_methodology =
      content_tag(:a, "View Methodology",
                  class: btn_class + " " + "_view_methodology",
                  data: {
                    toggle: "collapse",
                    target: target_str,
                    collapse: ".metric_value_form_container"
                  }
                 )
    return btn_add + btn_methodology if metric_card_type == :researched
    # btn_methodology
  end

  view :timeline_header do |args|
    wrap_with :div, class: "timeline-header timeline-row " do
      case args[:column]
      when :data
        _optional_render(:timeline_header_buttons, args, :show) || ""
      else ""
      end
    end
  end

  def timeline_head content, css_class
    <<-HTML
      <div class="td #{css_class}">
        #{content}
      </div>
      HTML
  end
end
