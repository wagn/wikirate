require File.expand_path('../../config/environment',  __FILE__)
Card::Auth.as_bot do
  Card.create! :name=>"*upload max",:type_id=>Card::PhraseID,:content=>"20" if not Card.exists?"*upload max"
end
# bypass SSL certificate verification in open-uri?
OpenSSL::SSL::VERIFY_PEER = OpenSSL::SSL::VERIFY_NONE
# Open-URI has a 10KB limit on StringIO objects, anything above that and it stores it as a temp file.
OpenURI::Buffer.send :remove_const, 'StringMax' if OpenURI::Buffer.const_defined?('StringMax')
OpenURI::Buffer.const_set 'StringMax', 0
source_cards = Card.search :type_id=>Card::SourceID, :right_plus=>["link",{:content=>["ne",""]}]
source_cards.each do |source_card|

  Card::Auth.current_id = Card.fetch_id source_card.creator_id
  Card::Auth.as_bot do
    source_link_card = source_card.fetch :trait=>:wikirate_link
    url = source_link_card.content
    original_url = url
    url.gsub!(/ /, '%20')
    url.gsub!(/https:/, 'http:')
    uri = nil

    puts "#{source_card.name},#{original_url}"
    begin
      uri = open(url, :allow_redirections => :safe,  "User-Agent" => "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.65 Safari/537.36",) 
    rescue OpenURI::HTTPError => error
      puts error
      next
    rescue Net::ReadTimeout => error
      puts error
      next
    rescue StandardError => error
      puts error
      next
    end
    content_type = uri.meta["content-type"]
     if not content_type.start_with?"text/html" and not content_type.start_with?"image/"
      puts "\t#{url},#{content_type},#{uri.meta['content-disposition']},#{uri.path}"
      filename = if cd = uri.meta['content-disposition'] and matched = cd.match(/filename=(\"?)(.+)\1/)  
        matched[2]
      else
        File.basename(URI.parse(url).path)      
      end
      source_link_card.delete!
      file_uploaded = ActionDispatch::Http::UploadedFile.new(:tempfile => uri, :filename => filename)
      result = source_card.update_attributes :subcards=>{"+File"=>{:attach=>file_uploaded,:content=>"CHOSEN",:type_id=>Card::FileID}}
      if !result
        puts "Fail : #{source_card.errors.messages}\t#{file_uploaded.size/1024}"
      end
    end
  end
end
