format :html do
  view :credit, tags: :unknown_ok do
    return "" unless card.known?
    wrap_with :div, class: "organized-by horizontal-list" do
      [
        wrap_with(:span, "Organized by "),
        render(:core, items: { view: :link })
      ]
    end
  end
end