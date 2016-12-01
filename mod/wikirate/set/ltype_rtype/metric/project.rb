include_set Abstract::KnownAnswers
include_set Abstract::Media

def project_card
  @project_card ||= right
end

def metric_card
  @metric_card ||= left
end

def company_ids
  project_card.company_ids
end

def records
  @records ||= company_ids.size
end

def metric_designer_card
  metric_card.metric_designer_card
end

def metric_designer_image
  metric_designer_card.fetch(trait: :image, new: {})
end

def researched_wql
  { left_id: metric_card.id,
    right_id: [:in] + company_ids,
    return: :count }
end

def worth_counting
  return 0 unless company_ids.any?
  yield
end

format :html do
  view :progress_bar_row, tags: :unknown_ok do
    wrap_with :div, class: "progress-bar-row" do
      [
        _render_metric_thumbnail,
        # should be metric view shared with company page
        _render_research_progress_bar
      ]
    end
  end

  view :metric_thumbnail do
    designer_image = card.metric_designer_image
    title = card.metric_card.right.name
    subformat(card.metric_card).text_with_image title: title,
                                                image: designer_image,
                                                size: :icon
  end

  view :research_progress_bar do
    research_progress_bar
  end

  def research_progress_bar
    progress_bar(
      { value: card.percent_known, class: "progress-known" },
      { value: card.percent_unknown, class: "progress-unknown" },
      { value: card.percent_not_researched, class: "progress-not-researched" }
    )
  end
end
