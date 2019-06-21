# Answer search for a given Company
include_set Abstract::AnswerSearch

def fixed_field
  :company_id
end

def filter_card_fieldcode
  :company_metric_filter
end

def default_sort_option
  :importance
end

format :html do
  before(:core) { voo.hide! :chart }

  def table_args
    [:metric, self, [:metric_thumbnail_with_vote, :concise],
     { header: [name_sort_links, "Answer"] }]
  end

  def details_view
    :metric_details_sidebar
  end

  def name_sort_links
    "#{importance_sort_link}#{designer_sort_link}#{title_sort_link}"
  end

  def title_sort_link
    table_sort_link "Metric", :title_name, "pull-left mx-3 px-1"
  end

  def designer_sort_link
    table_sort_link "", :metric_name, "pull-left mx-3 px-1"
  end

  def importance_sort_link
    table_sort_link "", :importance, "pull-left mx-3 px-1"
  end
end
