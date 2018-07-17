# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170524163436) do

  create_table "answers", id: :integer, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer "answer_id"
    t.integer "metric_id"
    t.integer "designer_id"
    t.integer "company_id"
    t.integer "record_id"
    t.integer "policy_id"
    t.integer "metric_type_id"
    t.integer "year"
    t.string "metric_name", collation: "utf8_general_ci"
    t.string "company_name", collation: "utf8_general_ci"
    t.string "designer_name", collation: "utf8_general_ci"
    t.string "title_name", collation: "utf8_general_ci"
    t.string "record_name", collation: "utf8_general_ci"
    t.string "value", limit: 1024, collation: "utf8_general_ci"
    t.decimal "numeric_value", precision: 30, scale: 5
    t.datetime "updated_at"
    t.boolean "imported"
    t.boolean "latest"
    t.string "checkers", collation: "utf8_general_ci"
    t.string "check_requester", collation: "utf8_general_ci"
    t.integer "creator_id"
    t.integer "editor_id"
    t.datetime "created_at"
    t.index ["answer_id"], name: "answer_id_index", unique: true
    t.index ["company_id"], name: "company_id_index"
    t.index ["designer_id"], name: "designer_id_index"
    t.index ["metric_id"], name: "metric_id_index"
    t.index ["metric_type_id"], name: "metric_type_id_index"
    t.index ["numeric_value"], name: "numeric_value_index"
    t.index ["policy_id"], name: "policy_id_index"
    t.index ["record_id"], name: "record_id_index"
    t.index ["value"], name: "value_index", length: { value: 100 }
  end

  create_table "card_actions", id: :integer, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.integer "card_id"
    t.integer "card_act_id"
    t.integer "super_action_id"
    t.integer "action_type"
    t.boolean "draft"
    t.text "comment"
    t.index ["card_act_id"], name: "card_actions_card_act_id_index"
    t.index ["card_id"], name: "card_actions_card_id_index"
  end

  create_table "card_acts", id: :integer, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.integer "card_id"
    t.integer "actor_id"
    t.datetime "acted_at"
    t.string "ip_address"
    t.index ["acted_at"], name: "acts_acted_at_index"
    t.index ["actor_id"], name: "card_acts_actor_id_index"
    t.index ["card_id"], name: "card_acts_card_id_index"
  end

  create_table "card_changes", id: :integer, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.integer "card_action_id"
    t.integer "field"
    t.text "value", limit: 16777215
    t.index ["card_action_id"], name: "card_changes_card_action_id_index"
  end

  create_table "card_references", id: :integer, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.integer "referer_id", default: 0, null: false
    t.string "referee_key", default: "", null: false
    t.integer "referee_id"
    t.string "ref_type", limit: 1, default: "", null: false
    t.integer "present"
    t.index ["ref_type"], name: "card_references_ref_type_index"
    t.index ["referee_id"], name: "card_references_referee_id_index"
    t.index ["referee_key"], name: "card_references_referee_key_index"
    t.index ["referer_id"], name: "card_references_referer_id_index"
  end

  create_table "card_revisions", id: :integer, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.datetime "created_at", null: false
    t.integer "card_id", null: false
    t.integer "creator_id", null: false
    t.text "content", null: false
    t.index ["card_id"], name: "revisions_card_id_index"
    t.index ["creator_id"], name: "revisions_created_by_index"
  end

  create_table "cards", id: :integer, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.string "name", null: false
    t.string "key", null: false
    t.string "codename"
    t.integer "left_id"
    t.integer "right_id"
    t.integer "current_revision_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "creator_id", null: false
    t.integer "updater_id", null: false
    t.string "read_rule_class"
    t.integer "read_rule_id"
    t.integer "references_expired"
    t.boolean "trash", null: false
    t.integer "type_id", null: false
    t.text "db_content", limit: 16777215
    t.index ["created_at"], name: "cards_created_at_index"
    t.index ["key"], name: "cards_key_index", unique: true
    t.index ["left_id"], name: "cards_left_id_index"
    t.index ["name"], name: "cards_name_index"
    t.index ["read_rule_id"], name: "cards_read_rule_id_index"
    t.index ["right_id"], name: "cards_right_id_index"
    t.index ["type_id"], name: "cards_type_id_index"
    t.index ["updated_at"], name: "cards_updated_at_index"
  end

  create_table "counts", id: :integer, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer "left_id"
    t.integer "right_id"
    t.integer "value"
    t.index ["left_id"], name: "right_id_index"
    t.index ["right_id"], name: "left_id_index"
  end

  create_table "delayed_jobs", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer "priority", default: 0, null: false
    t.integer "attempts", default: 0, null: false
    t.text "handler", limit: 16777215, null: false
    t.text "last_error"
    t.datetime "run_at"
    t.datetime "locked_at"
    t.datetime "failed_at"
    t.string "locked_by"
    t.string "queue"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["priority", "run_at"], name: "delayed_jobs_priority"
  end

  create_table "metric_answers", id: :integer, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.integer "metric_answer_id"
    t.integer "metric_id"
    t.integer "designer_id"
    t.integer "company_id"
    t.integer "metric_record_id"
    t.integer "policy_id"
    t.integer "metric_type_id"
    t.integer "year"
    t.string "metric_name"
    t.string "company_name"
    t.string "designer_name"
    t.string "title_name"
    t.string "metric_record_name"
    t.string "value"
    t.datetime "updated_at"
    t.boolean "imported"
    t.boolean "latest"
    t.index ["company_id"], name: "company_id_index"
    t.index ["designer_id"], name: "designer_id_index"
    t.index ["metric_answer_id"], name: "metric_answer_id_index", unique: true
    t.index ["metric_id"], name: "metric_id_index"
    t.index ["metric_record_id"], name: "metric_record_id_index"
    t.index ["metric_type_id"], name: "metric_type_id_index"
    t.index ["policy_id"], name: "policy_id_index"
    t.index ["value"], name: "value_index"
  end

  create_table "metric_answers_deck_cards", id: :integer, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.integer "metric_answer_id"
    t.integer "metric_id"
    t.integer "designer_id"
    t.integer "company_id"
    t.integer "policy_id"
    t.integer "metric_type_id"
    t.integer "year"
    t.string "metric_name"
    t.string "company_name"
    t.string "value"
    t.datetime "updated_at"
    t.boolean "imported"
    t.index ["company_id"], name: "company_id_index"
    t.index ["designer_id"], name: "designer_id_index"
    t.index ["metric_answer_id"], name: "metric_answer_id_index", unique: true
    t.index ["metric_id"], name: "metric_id_index"
    t.index ["metric_type_id"], name: "metric_type_id_index"
    t.index ["policy_id"], name: "policy_id_index"
    t.index ["value"], name: "value_index"
  end

  create_table "panswers", id: :integer, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.integer "answer_id"
    t.integer "metric_id"
    t.integer "designer_id"
    t.integer "company_id"
    t.integer "record_id"
    t.integer "policy_id"
    t.integer "metric_type_id"
    t.integer "year"
    t.string "metric_name"
    t.string "company_name"
    t.string "designer_name"
    t.string "title_name"
    t.string "record_name"
    t.string "value"
    t.float "numeric_value", limit: 24
    t.datetime "updated_at"
    t.boolean "imported"
    t.boolean "latest"
    t.index ["answer_id"], name: "answer_id_index", unique: true
    t.index ["company_id"], name: "company_id_index"
    t.index ["designer_id"], name: "designer_id_index"
    t.index ["metric_id"], name: "metric_id_index"
    t.index ["metric_type_id"], name: "metric_type_id_index"
    t.index ["policy_id"], name: "policy_id_index"
    t.index ["record_id"], name: "record_id_index"
    t.index ["value"], name: "value_index"
  end

  create_table "schema_migrations", primary_key: "version", id: :string, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
  end

  create_table "schema_migrations_cards", id: false, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.string "version", null: false
    t.index ["version"], name: "unique_schema_migrations_cards", unique: true
  end

  create_table "schema_migrations_core_cards", id: false, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.string "version", null: false
    t.index ["version"], name: "unique_schema_migrations_core_cards", unique: true
  end

  create_table "schema_migrations_deck_cards", id: false, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.string "version", null: false
    t.index ["version"], name: "unique_schema_migrations_deck_cards", unique: true
  end

  create_table "sessions", id: :integer, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.string "session_id"
    t.text "data"
    t.datetime "updated_at"
    t.index ["session_id"], name: "sessions_session_id_index"
  end

  create_table "users", id: :integer, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.string "login", limit: 40
    t.string "email", limit: 100
    t.string "crypted_password", limit: 40
    t.string "salt", limit: 42
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string "password_reset_code", limit: 40
    t.string "status", default: "request"
    t.integer "invite_sender_id"
    t.string "identity_url"
    t.integer "card_id", null: false
    t.integer "account_id", null: false
  end

end
