# ActImportManager puts all creates and update actions that are part of the import
# under one act of a import card
class ActImportManager < ImportManager
  def initialize act_card, csv_file, conflict_strategy=:skip, extra_row_data={}
    @act_card = act_card
    super(csv_file, conflict_strategy, extra_row_data)
  end

  def add_card args
    handle_conflict args[:name] do
      subcard =
        if @dup
          @dup.update_attributes args
          @dup
        else
          Card.create args
        end
      #subcard = @act_card&.add_subcard args.delete(:name), args
      #subcard.director.catch_up_to_stage :validate
      pick_up_card_errors do
        subcard
      end
    end
  end

  # def import_card card_args
  #   i_card = add_card card_args
  #   if i_card && @act_card
  #     # i_card.director.catch_up_to_stage :validate
  #     # import_card.director.transact_in_stage = :integrate
  #   end
  #   i_card
  # end

  def duplicate name
    @dup ||= Card[name] || (@act_card && @act_card.subcards[name])
  end

  def log_status
    super
    @act_card&.import_status_card&.update_attributes content: @import_status.to_json
  end

  private

  def init_import_status row_count=nil
    isc = @act_card&.try :import_status_card
    @import_status = isc&.real? ? isc.status : super
  end

  def row_finished row
    return if row.status == :failed
    @act_card&.mark_as_imported row.row_index
  end
end
