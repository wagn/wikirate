view :solocomplete do |args|
  args ||= {}
  items = args[:item_list] || card.item_names(context: :raw)
  items = [""] if items.empty?
  options_card_name = (oc = card.options_rule_card) ? oc.cardname.url_key : ":all"

  extra_css_class = args[:extra_css_class] || "pointer-list-ul"

  %(
    <ul class="pointer-list-editor #{extra_css_class}" data-options-card="#{options_card_name}">
      <li class="pointer-li">
      <span class="input-group">
        #{text_field_tag 'pointer_item', items[0], class: 'pointer-item-text form-control'}
      </span>
      </li>
    </ul>
  )
end
