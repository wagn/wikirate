# +checked_by stores the current check state as follows:
# empty/non-existent: no check
# refer to "request": double check is requested
# refer to one or more users: the users checked the value
#
# We have to distinguish between
# "double check currently requested" and
# "double check was requested before it was double checked"
# so that the value can get its "requested" state back if somebody
# removes his double check. We use the +check_requested_by card for that.
# If the double check is requested the requester is
# stored (permanently) in +check_requested_by and +checked_by is set
# to "request". A double check removes the "request" and adds the checker to
# +checked_by but the requester stays in +check_requested_by.

def virtual?
  left.present?
end

def user
  Auth.current
end

def user_checked?
  checked? && checkers.include?(user.name)
end

def other_user_requested_check?
  check_requested? && check_requester != user.name
end

def checked?
  checkers.present?
end

def check_requested?
  items.first == "request"
end

def checkers
  check_requested? ? [] : items
end

def checker_count
  @checker_count ||= checkers.size
end

def check_requester
  check_requested_by_card&.first_name
end

def check_requested_by_card
  @check_requested_by_card ||=
    left(new: { type_id: MetricAnswerID }).check_requested_by_card
end

def allowed_to_check?
  answer.updater_id != Auth.current_id
end

def check_was_requested_before_double_check?
  check_requester.present?
end

def items
  @items ||= item_names
end

def db_content= content
  @items = nil
  super
end

def option_names
  ["request"]
end

def answer
  @answer ||= left&.answer
end

format :html do
  delegate :answer,
           :allowed_to_check?, :checked?, :user_checked?,
           :other_user_requested_check?, :check_requested?,
           :checkers, :check_requester, :user, :checker_count,
           to: :card

  view :edit_in_form do
    return "" if other_user_requested_check?
    wrap_with(:h5, "#{fa_icon('check-circle-o', class: 'text-muted')} Checks") + super()
  end

  def input_type
    :checkbox
  end

  def option_label_text _option_name
    "request"
  end

  view :input, unknown: true do
    wrap_with :div, class: "d-flex flex-nowrap" do
      super() + popover_link("Not sure? Ask another researcher to double check this.")
    end
  end

  view :core, template: :haml
  view :check_interaction, cache: :never, template: :haml,
                           perms: ->(fmt) { fmt.allowed_to_check? }

  def research_params
    @research_params ||=
      inherit(:research_params) ||
      parent.try(:research_params) ||
      card.left&.format&.try(:research_params) || {}
  end

  view :flag, unknown: true do
    card.items.present? ? render_icon : ""
  end

  view :icon do
    if checked?
      double_check_icon
    elsif check_requested?
      request_icon
    else
      ""
    end
  end

  def verb
    answer.editor_id ? "last updated" : "created"
  end

  def checkers_list
    checkers.map { |n| nest n, view: :link }.to_sentence
  end

  view :full_list, cache: :never do
    with_paging do |paging_args|
      wrap_with :div, pointer_items(paging_args.extract!(:limit, :offset)),
                class: "pointer-list"
    end
  end

  def double_check_icon
    fa_icon "check-circle", class: "verify-blue", title: "value checked"
  end

  def request_icon
    fa_icon :check_circle_o, class: "request-red", title: "check requested"
  end

  BTN_CLASSES = "btn btn-outline-secondary btn-sm".freeze

  # @param text [String] linktext
  # @param flag [Symbol] :check or :uncheck
  def check_button text, flag: :check
    link_to text, class: "#{BTN_CLASSES} slotter",
                  remote: true, rel: "nofollow",
                  href: path(action: :update, set_flag: flag)
  end

  def fix_link
    link_to_card :research_page, "No, I'll fix it",
                 class: "#{BTN_CLASSES} ml-1",
                 path: { view: :edit }.merge(research_params)
  end
end

# currently testing for main action, but what is important is that
# we don't create a conflict when the checked by card is created
# as part of the original answer create event.
event :update_answer_lookup_table_due_to_check_change, :finalize,
      changed: :content, when: :main_action? do
  update_answer answer_id: left_id
end

def main_action?
  ActManager.act&.card == self
end

event :user_checked_value, :prepare_to_store, on: :save, when: :add_checked_flag? do
  add_checker unless user_checked?
  update_user_check_log.add_id left.id
end

event :user_unchecked_value, :prepare_to_store,
      on: :update, when: :remove_checked_flag? do
  drop_checker
  update_user_check_log.drop_id left.id
end

event :user_requests_check, :prepare_to_store,
      when: :request_check_flag_update?, changed: :content do
  if content == "[[#{request_tag}]]"
    attach_request "[[#{user.name}]]" unless check_requester.present?
  else
    attach_request ""
  end
end

def attach_request requester
  attach_subcard check_requested_by_card.name, content: requester, type_id: PointerID
end

def request_tag
  @request_tag ||= Card.fetch_name(:request)
end

def mark_as_requested
  self.content = "[[#{request_tag}]]"
end

def update_user_check_log
  add_subcard Auth.current.name.field_name(:double_checked),
              type_id: PointerID
end

def add_checker
  if check_requested? # override request flag
    self.content = "[[#{user.name}]]"
  else
    add_item user.name
  end
end

def drop_checker
  drop_item user.name
  mark_as_requested if item_names.empty? &&
                       check_was_requested_before_double_check?
end

def add_checked_flag?
  Env.params["set_flag"] == "check"
end

def remove_checked_flag?
  Env.params["set_flag"] == "uncheck"
end

def request_check_flag_update?
  !add_checked_flag? && !remove_checked_flag?
end

format :json do
  def atom
    super().merge checks: card.checkers.count, check_requested: card.check_requested?
  end
end
