RSpec.describe Card::Set::Abstract::Thumbnail do
  def card_subject
    Card["Death Star"]
  end

  specify "view thumbnail" do
    expect_view(:thumbnail).to have_tag("div.thumbnail") do
      with_tag "div.image-box.small" do
        with_tag "a.known-card"
      end
      with_tag "div.thumbnail-text" do
        with_tag "div.thumbnail-title" do
          with_tag "a.known-card"
        end
        with_tag "div.thumbnail-subtitle"
      end
    end
  end

  specify "view thumbnail_minimal" do
    expect_view(:thumbnail_minimal).to have_tag("div.thumbnail") do
      with_unlinked "image-box.small"
      with_tag "div.thumbnail-text" do
        with_unlinked "thumbnail-title"
        without_tag "div.thumbnail-subtitle"
      end
    end
  end

  specify "view thumbnail_no_link" do
    expect_view(:thumbnail_no_link).to have_tag("div.thumbnail") do
      with_unlinked "image-box.small"
      with_tag "div.thumbnail-text" do
        with_unlinked "thumbnail-title"
        with_tag "div.thumbnail-subtitle"
      end
    end
  end

  specify "view thumbnail_image" do
    expect_view(:thumbnail).to have_tag("div.image-box") do
      with_tag "div.image-box.small" do
        with_tag "a.known-card" do
          with_tag "i.fa-building"
        end
      end
    end
  end

  def with_unlinked klass
    with_tag "div.#{klass}" do
      without_tag "a.known-card"
    end
  end
end
