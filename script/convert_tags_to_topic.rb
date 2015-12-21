require File.expand_path('../../config/environment',  __FILE__)
require 'colorize'

def put_things_in_tag_to_correct_position cards, skip_year
  i = 0
  cards.each do |card|
    puts "migrating #{card.name}'s tags".green
    company = card.fetch trait: :wikirate_company, new: {}
    topic = card.fetch trait: :wikirate_topic, new: {}
    year = card.fetch trait: :year, new: {}
    card.fetch(trait: :wikirate_tag).item_cards.each do |tag|
      case tag.type_id
      when Card::WikirateCompanyID then company << tag
      when Card::WikirateTopicID then topic << tag
      when Card::YearID then year << tag unless skip_year
      end
    end
    if company.changed? && company.item_names.size > 0
      puts "\tUpdating #{company.name} to #{company.content}".green
      company.save!
    end
    if topic.changed? && topic.item_names.size > 0
      puts "\tUpdating #{topic.name} to #{topic.content}".green
      topic.save!
    end
    if year.changed? && year.item_names.size > 0
      puts "\tUpdating #{year.name} to #{year.content}".green
      year.save!
    end
    i += 1
    Card.cache.reset_local if i % 10 == 0
  end
end

Card::Auth.as_bot do
  puts 'Searching tag cards'.green
  tags_card = Card.search type_id: Card::WikirateTagID, sort: :name
  puts "#{tags_card.size} tag cards found.".green
  tags_card.each do |card|
    card.type_id = Card::WikirateTopicID
    puts "Updating #{card.name}'s type to topic".green
    card.save!
    Card.cache.reset_local
  end
  puts 'Finished type updates!'.green
  puts 'Getting all claim + tag cards'.green
  note_cards_with_tag = Card.search type_id: Card::ClaimID, right_plus: 'tag'
  puts "#{note_cards_with_tag.size} claim+tag cards found. Start Praying".green
  put_things_in_tag_to_correct_position note_cards_with_tag, false
  puts 'Finished claim+tag updates!'.green
  puts 'Getting all note + tag cards'.green
  source_cards_with_tag = Card.search type_id: Card::SourceID,
                                      right_plus: 'tag'
  puts "#{source_cards_with_tag.size} note+tag cards found. Start Praying".green
  put_things_in_tag_to_correct_position source_cards_with_tag, true
  puts 'Finished source+tag updates!'.green
end
