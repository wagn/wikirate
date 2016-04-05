format :html do
  view :timeline do |args|
    timeline = output [
      (wrap_with :div, class: 'pull-left timeline-data' do
        [
          _optional_render(:timeline_header, args.merge(column: :data), :show),
          # value_form_container,
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
    path_opts = {
      action: :new,
      type: :metric_value,
      slot: { company: card.cardname.left_name.tag,
              metric: card.cardname.left_name.trunk
            }
    }
    link = _render_modal_link(args.merge(class: 'btn btn-default btn-sm',
                                         text: '+ Add New Value',
                                         path_opts: path_opts
                                        ))
    timeline_head(link, 'new')
  end

  view :timeline_add_new_button do
    content_tag(:div, content_tag(:small, 'Add new value'),
                class: 'btn btn-sm
                        btn-default
                        margin-12
                        _add_new_value',
                data: {
                  company: card.cardname.left_name.tag,
                  metric: card.cardname.left_name.trunk_name.url_key,
                  toggle: 'collapse-next',
                  parent: '.timeline-data',
                  collapse: '.metric_value_form_container'
                }
               )
    # timeline_head(button, 'new')
  end

  view :timeline_header do |args|
    wrap_with :div, class: 'timeline-header timeline-row ' do
      case args[:column]
      when :data
        _optional_render(:timeline_add_new_button, args, :show) || ''
        # timeline_head('Year','year')
        #   .concat(timeline_head('Value','value'))
        #   .concat(_optional_render(:timeline_add_new_link, args, :show) || '')
      else ''
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
