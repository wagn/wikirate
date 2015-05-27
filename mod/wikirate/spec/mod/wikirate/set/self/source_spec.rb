# -*- encoding : utf-8 -*-
require 'link_thumbnailer'

describe Card::Set::Self::Source do
   before do
     @page_card = Card["Source"]
  end
  describe "while check iframable" do
    it "should return true for a iframable website" do
    
      url = 'http://wikirate.org'
   
      Card::Env.params[:url] = url
      result = @page_card.format( :format=>:json)._render(:check_iframable) 
      expect(result[:result]).to be true
     
    end
    it "should return false for non iframble website" do
      url = 'http://www.google.com'
      
      Card::Env.params[:url] = url
      result = @page_card.format( :format=>:json)._render(:check_iframable) 
      expect(result[:result]).to be false
    end
    context "when rendering pdf in firefox" do 
      it "returns true if it is firefox" do 
        url = 'http://www.adobe.com/content/dam/Adobe/en/devnet/acrobat/pdfs/pdf_open_parameters.pdf'
        result = @page_card.format( :format=>:json).is_iframable? url,"Firefox"
        expect(result).to be(true)
      end
      it "returns false if it is not firefox" do 
        url = 'http://www.adobe.com/content/dam/Adobe/en/devnet/acrobat/pdfs/pdf_open_parameters.pdf'
        result = @page_card.format( :format=>:json).is_iframable? url,"Chrome"
        expect(result).to be(false)
      end
    end
    
    it "should return false for non sense website" do
      url = 'helloworld'
      
      Card::Env.params[:url] = url
      result = @page_card.format( :format=>:json)._render(:check_iframable) 
      expect(result[:result]).to be false
    end
    it "should return false for empty website" do
      
      result = @page_card.format( :format=>:json)._render(:check_iframable) 
      expect(result[:result]).to be false
    end
  end

  describe "send feedback to CERTH" do
    before do
      @url = "http://google.com"
    end
    describe "send insufficient parameters" do
      it "handles no parameter" do 
        #no parameters
        result = @page_card.format( :format=>:json)._render(:feedback)
        expect(result[:result]).to be false
      end
      it "handles no url" do
        Card::Env.params[:company] = "Apple Inc."
        Card::Env.params[:topic] = "Natural Resource Use"
        Card::Env.params[:type] = "either"
        result = @page_card.format( :format=>:json)._render(:feedback)
        expect(result[:result]).to be false

      end
      it "handles no company" do
       Card::Env.params[:url] = @url
        Card::Env.params[:topic] = "Natural Resource Use"
        Card::Env.params[:type] = "either"
        result = @page_card.format( :format=>:json)._render(:feedback)
        expect(result[:result]).to be false

      end
      it "handles no topic" do
        Card::Env.params[:url] = @url
        Card::Env.params[:company] = "Apple Inc."
        Card::Env.params[:type] = "either"
        result = @page_card.format( :format=>:json)._render(:feedback)
        expect(result[:result]).to be false

      end
      it "handles no type" do
        Card::Env.params[:url] = @url
        Card::Env.params[:company] = "Apple Inc."
        Card::Env.params[:topic] = "Natural Resource Use"
        result = @page_card.format( :format=>:json)._render(:feedback)
        expect(result[:result]).to be false

      end
    end
    describe "send invalid parameters" do
      it "handles invalid company" do 
        Card::Env.params[:url] = @url
        Card::Env.params[:company] = "joe_user"
        Card::Env.params[:topic] = "Natural Resource Use"
        Card::Env.params[:type] = "either"
        result = @page_card.format( :format=>:json)._render(:feedback)
        expect(result[:result]).to be false
      end
      it "handles invalid topic" do 
        Card::Env.params[:url] = @url
        Card::Env.params[:company] = "Apple Inc."
        Card::Env.params[:topic] = "joe_user"
        Card::Env.params[:type] = "either"
        result = @page_card.format( :format=>:json)._render(:feedback)
        expect(result[:result]).to be false
      end
      it "handles invalid type" do 
        Card::Env.params[:url] = @url
        Card::Env.params[:company] = "Apple Inc."
        Card::Env.params[:topic] = "Natural Resource Use"
        Card::Env.params[:type] = "joe_user"
        result = @page_card.format( :format=>:json)._render(:feedback)
        expect(result[:result]).to be false
      end
    end
    describe "normal cases" do
      it "handles either type" do 
        Card::Env.params[:url] = @url
        Card::Env.params[:company] = "Apple Inc."
        Card::Env.params[:topic] = "Natural Resource Use"
        Card::Env.params[:type] = "either"
        result = @page_card.format( :format=>:json)._render(:feedback)
        expect(result[:result]).to be true
        expect(result[:result_from_certh]).to eq(1)
      end
      it "handles company type" do 
        Card::Env.params[:url] = @url
        Card::Env.params[:company] = "Apple Inc."
        Card::Env.params[:topic] = "Natural Resource Use"
        Card::Env.params[:type] = "company"
        result = @page_card.format( :format=>:json)._render(:feedback)
        expect(result[:result]).to be true
        expect(result[:result_from_certh]).to eq(1)
      end
      it "handles topic type" do 
        Card::Env.params[:url] = @url
        Card::Env.params[:company] = "Apple Inc."
        Card::Env.params[:topic] = "Natural Resource Use"
        Card::Env.params[:type] = "topic"
        result = @page_card.format( :format=>:json)._render(:feedback)
        expect(result[:result]).to be true
        expect(result[:result_from_certh]).to eq(1)
      end
      it "handles relevant type" do 
        Card::Env.params[:url] = @url
        Card::Env.params[:company] = "Apple Inc."
        Card::Env.params[:topic] = "Natural Resource Use"
        Card::Env.params[:type] = "relevant"
        result = @page_card.format( :format=>:json)._render(:feedback)
        expect(result[:result]).to be true
        expect(result[:result_from_certh]).to eq(1)
      end
    end
  end
  describe "get meta data of url" do
    
    it "handles invalid url" do
      
      url = 'abcdefg'
      
      Card::Env.params[:url] = url
      result = @page_card.format( :format=>:json)._render(:metadata) 

      result_hash = JSON.parse(result)
      expect(result_hash["title"]).to eq("")
      expect(result_hash["description"]).to eq("")
      expect(result_hash["error"]).to eq('invalid url')
     
    end
    it "handles empty url" do
      url = ''
      
      Card::Env.params[:url] = url
      result = @page_card.format( :format=>:json)._render(:metadata) 

      result_hash = JSON.parse(result)
      expect(result_hash["title"]).to eq("")
      expect(result_hash["description"]).to eq("")
      expect(result_hash["error"]).to eq('empty url')
    end

    it "handles normal existing url " do
      url = 'http://www.google.com/?q=wikirateissocoolandawesomeyouknow'
      sourcepage = create_page_with_sourcebox url,{},'true'

      
      Card::Env.params[:url] = url
      result = @page_card.format( :format=>:json)._render(:metadata) 

      result_hash = JSON.parse(result)
      expect(Card.fetch("#{ sourcepage.name }+title").content).to eq result_hash["title"]
      expect(Card.fetch("#{ sourcepage.name }+description").content).to eq result_hash["description"]
      expect(result_hash["error"].empty?).to be true
    end

    it "handles normal non existing url " do
      url = 'http://www.google.com/?q=wikirateissocoolandawesomeyouknow'
      
      
      Card::Env.params[:url] = url
      result = @page_card.format( :format=>:json)._render(:metadata) 

      result_hash = JSON.parse(result)
      preview = LinkThumbnailer.generate(url)

      expect(result_hash["title"]).to eq(preview.title)
      expect(result_hash["description"]).to eq(preview.description)
      expect(result_hash["error"].empty?).to be true
      
    end

    it "shows the link for view \"missing\"" do
      sourcepage = create_page_with_sourcebox nil,{},'true'
      html = render_card :missing,{:name=>sourcepage.name}
      expect(html).to eq(render_card :link,{:name=>sourcepage.name} )
    end
  end
end
