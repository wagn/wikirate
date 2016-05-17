# -*- encoding : utf-8 -*-

class DefaulFollowRules < Card::Migration
  def up
    card = Card[:follow_defaults]
    card.update_attributes! content: "[[*all+*created]]\n[[*all+*edited]]\n[[*all+*voted up]]"
    card = Card.fetch "follow suggestions", new: { type_code: :pointer }
    card.update_attributes! content: "[[*all+*created]]\n[[*all+*edited]]\n[[*all+*voted up]]\n[[*all+*voted down]]"
  end
end
