# -*- encoding : utf-8 -*-
require 'link_thumbnailer'

describe Card::Set::Type::Source do
  before do
    @wikirate_link_prefix = "#{Card::Env[:protocol]}#{Card::Env[:host]}/"
  end

  def create_link_source url
    create_source link: url
  end

  def create_source args
    Card.create! source_args(args)
  end

  def source_args args
    res = {
      type_id: Card::SourceID,
      subcards: {
        '+Link' => {},
        '+File' => { type_id: Card::FileID },
        '+Text' => { type_id: Card::BasicID, content: '' }
      }
    }
    [:link, :file, :text].each do |key|
      next unless args[key]
      res[:subcards]["+#{key.to_s.capitalize}"][:content] = args[key]
    end
    res
  end

  describe 'while creating a Source' do
    before do
      login_as 'joe_user'
    end

    it 'adds title and description' do
      url = 'http://www.google.com/?q=wikirateissocoolandawesomeyouknow'
      Card::Env.params[:sourcebox] = 'true'
      sourcepage = Card.create! type_id: Card::SourceID,
                                subcards: {
                                  '+Link' => { content: url },
                                  '+File' => { type_id: Card::FileID },
                                  '+Text' => {
                                    type_id: Card::BasicID,
                                    content: ''
                                  }
                                }
      #      sourcepage = create_link_source url
      preview = LinkThumbnailer.generate(url)

      expect(Card.fetch("#{sourcepage.name}+title").content)
        .to eq(preview.title)
      expect(Card.fetch("#{sourcepage.name}+description").content)
        .to eq(preview.description)
    end

    it 'handles empty source' do
      url = ''
      Card::Env.params[:sourcebox] = 'true'
      sourcepage = create_link_source url
      expect(sourcepage).not_to be_valid
      expect(sourcepage.errors).to have_key :source
      expect(sourcepage.errors[:source])
        .to include('Source content required')
    end

    it 'creates website card with actions' do
      url = 'http://www.google.com/?q=wikirateissocoolandawesomeyouknow'
      Card::Env.params[:sourcebox] = 'true'
      sourcepage = create_link_source url
      website_card = sourcepage.fetch trait: :wikirate_website
      expect(website_card.last_action).to be
    end

    describe 'while creating duplicated source on claim page' do
      it 'returns exisiting url' do
        url = 'http://www.google.com/?q=wikirateissocoolandawesomeyouknow'
        Card::Env.params[:sourcebox] = 'true'
        firstsourcepage = create_link_source url
        secondsourcepage = create_link_source url
        expect(firstsourcepage.name).to eq(secondsourcepage.name)
      end
    end
    describe 'while creating duplicated source on source page' do
      it 'shows error' do
        url = 'http://www.google.com/?q=wikirateissocoolandawesomeyouknow'

        firstsourcepage = create_link_source url
        secondsourcepage = create_link_source url

        expect(secondsourcepage).not_to be_valid
        expect(secondsourcepage.errors).to have_key :link
        expected = "exists already. <a href='/#{firstsourcepage.name}'>"\
                   'Visit the source.</a>'
        expect(secondsourcepage.errors[:link]).to include(expected)
      end
    end
    context 'while creating without anything' do
      it do
        sourcepage = Card.new type_id: Card::SourceID
        expect(sourcepage).not_to be_valid
        expect(sourcepage.errors).to have_key :source
        expected = 'Source content required'
        expect(sourcepage.errors[:source]).to include(expected)
      end
    end
    context 'while creating with more than one source type ' do
      it do
        url = 'http://www.google.com/?q=wikirateissocoolandawesomeyouknow'

        sourcepage = Card.new source_args(link: url, text: 'Hello boys!')
        expect(sourcepage).not_to be_valid
        expect(sourcepage.errors).to have_key :source
        expected = 'Only one type of content is allowed'
        expect(sourcepage.errors[:source]).to include(expected)
      end
    end
    describe 'while creating a source with a file link' do
      context 'link points to a file' do
        it 'downloads it and saves as a file source' do
          pdf_url = 'http://wikirate.org/Page-000003962+File.pdf'
          sourcepage = create_link_source pdf_url
          expect(sourcepage.errors).to be_empty
          source_file = sourcepage.fetch(trait: :file)
          expect(source_file).to_not be_nil
          # expect(sourcepage.fetch(trait: :wikirate_link)).to be_nil
          expect(Card.exists?("#{sourcepage.name}+title")).to eq(false)
          expect(Card.exists?("#{sourcepage.name}+description")).to eq(false)
          expect(File.exist?(source_file.file.path)).to be true
        end
        it 'handles this special url and saves as a file source' do
          pdf_url = 'https://www.unglobalcompact.org/system/attachments/9862/'\
                    'original/Sinopec_2010_Sustainable_Development_Report.pdf?'\
                    '1302508855'
          sourcepage = create_link_source pdf_url
          expect(sourcepage.errors).to be_empty
          expect(sourcepage.fetch(trait: :file)).to_not be_nil
          # expect(sourcepage.fetch(trait: :wikirate_link)).to be_nil
        end
        context "file is bigger than '*upload max'" do
          it "won't create file source" do
            pdf_url = 'http://cartographicperspectives.org/index.php/journal/'\
                      'article/download/cp49-issue/489'
            sourcepage = create_link_source pdf_url
            expect(sourcepage.errors).to be_empty
            expect(sourcepage.fetch(trait: :wikirate_link)).to_not be_nil
            expect(sourcepage.fetch(trait: :file)).to be_nil
            expect(Card["#{sourcepage.name}+title"]).to be_nil
            expect(Card["#{sourcepage.name}+description"]).to be_nil
          end
        end
      end
    end
    describe 'while creating a source with a wikirate link' do
      context 'a source link' do
        it 'return the source card' do
          Card::Env.params[:sourcebox] = 'true'
          url = 'http://www.google.com/?q=wikirateissocoolandawesomeyouknow'
          sourcepage = create_link_source url
          url_key = sourcepage.cardname.url_key
          new_source_url = "#{@wikirate_link_prefix}#{url_key}"
          new_sourcepage = Card.create type_id: Card::SourceID,
                                       subcards: {
                                         '+Link' => {
                                           content: new_source_url }
                                       }
          expect(sourcepage.name).to eq(new_sourcepage.name)
        end
      end
      context 'a non source link' do
        it 'return the source card' do
          Card::Env.params[:sourcebox] = 'true'
          company = get_a_sample_company
          url_key = company.cardname.url_key

          new_source_url = "#{@wikirate_link_prefix}#{url_key}"
          new_sourcepage = Card.new source_args(link: new_source_url)
          expect(new_sourcepage).not_to be_valid
          expect(new_sourcepage.errors).to have_key :source
          expected = ' can only be source type or valid URL.'
          expect(new_sourcepage.errors[:source]).to include(expected)
        end
      end
      context 'a non exisiting card link' do
        it 'return errors' do
          Card::Env.params[:sourcebox] = 'true'

          new_source_url = "#{@wikirate_link_prefix}/non_exisiting_card_1"

          new_sourcepage = Card.new source_args(link: new_source_url)
          expect(new_sourcepage).not_to be_valid
          expect(new_sourcepage.errors).to have_key :source
          expect(new_sourcepage.errors[:source]).to include(' does not exist.')
        end
      end
    end
    describe 'in sourcebox' do
      context 'while link is a card name' do
        it 'returns source card ' do
          source_card = create_page
          Card::Env.params[:sourcebox] = 'true'
          return_source_card = create_link_source source_card.name
          expect(return_source_card.name).to eq(source_card.name)
        end
        it 'returns error' do
          Card::Env.params[:sourcebox] = 'true'
          return_source_card = Card.new source_args(
            link: get_a_sample_company.name
          )
          expect(return_source_card).not_to be_valid
          expect(return_source_card.errors).to have_key :source
          expect(return_source_card.errors[:source])
            .to include(' can only be source type or valid URL.')
        end
      end
      context 'while link is a non existing card' do
        it 'returns error ' do
          Card::Env.params[:sourcebox] = 'true'
          return_source_card = Card.new source_args(
            link: 'this is not a exisiting card'
          )

          expect(return_source_card).not_to be_valid
          expect(return_source_card.errors).to have_key :source
          expect(return_source_card.errors[:source])
            .to include(' does not exist.')
        end
      end
    end
  end
  describe 'while rendering views' do
    before do
      login_as 'joe_user'
      @url = 'http://www.google.com/?q=wikirateissocoolandawesomeyouknow'
      @source_page = create_page @url, {}
    end
    it 'renders titled view with voting' do
      expected = @source_page.format.render_titled_with_voting
      expect(@source_page.format.render_titled).to eq(expected)
    end

    it 'renders open view with :custom_source_header to be true' do
      expected = @source_page.format.render_header_with_voting
      expect(@source_page.format.render_open).to include(expected)
    end

    it 'renders header view with :custom_source_header to be true' do
      render = @source_page.format.render_header custom_source_header: true
      expected = @source_page.format.render_header_with_voting
      expect(render).to include(expected)
    end
    it 'renders metric_import_link' do
      csv_path = "#{Rails.root}/mod/wikirate_source/"\
                'spec/set/type_plus_right/source/import_test.csv'
      test_csv = File.open(csv_path)
      sourcepage = create_source file: test_csv
      html = sourcepage.format.render_metric_import_link
      source_file = sourcepage.fetch trait: :file
      expected_url = "/#{source_file.cardname.url_key}?view=import"
      expect(html).to have_tag('a',
                               with: {
                                 href: expected_url },
                               text: 'Import to metric values')
    end
    describe 'original_icon_link' do
      context 'file source' do
        it 'renders upload icon' do
          test_csv = File.open("#{Rails.root}/mod/wikirate_source/spec/"\
                               'set/type_plus_right/source/import_test.csv')
          sourcepage = create_source file: test_csv
          html = sourcepage.format.render_original_icon_link
          source_file = sourcepage.fetch trait: :file
          expect(html).to have_tag('a', with: { href: source_file.file.url }) do
            with_tag 'i', with: { class: 'fa fa-upload' }
          end
        end
      end
      context 'link source' do
        it 'renders globe icon' do
          html = @source_page.format.render_original_icon_link
          expect(html).to have_tag('a', with: { href: @url }) do
            with_tag 'i', with: { class: 'fa fa-globe' }
          end
        end
      end
      context 'text source' do
        it 'renders pencil icon' do
          new_sourcepage = create_source text: 'test text report'
          html = new_sourcepage.format.render_original_icon_link
          text_source = new_sourcepage.fetch trait: :text
          expected_url = "/#{text_source.cardname.url_key}"
          expect(html).to have_tag('a', with: {
                                     href: expected_url }) do
            with_tag 'i', with: { class: 'fa fa-pencil' }
          end
        end
      end
    end
  end
end
