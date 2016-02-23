

Capybara.default_wait_time = 60

When /^I press "([^\"]*)" within "([^\"]*)"$/ do |button, scope_selector|
  within(scope_selector) do
    click_button(button)
  end
end

When /^I wait until ajax response$/ do
  Timeout.timeout(Capybara.default_wait_time) do
    while page.evaluate_script('jQuery.active') != 0
      sleep(0.5)
    end
  end
end

When /^I print html of the page$/ do
  puts page.html
end

When /^(?:|I )fill in "([^"]*)" with card path of source with link "([^"]*)"$/ do |field, value|
  duplicates = Card::Set::Self::Source.find_duplicates value
  duplicated_card = duplicates.first.left if duplicates.any?

  url = "#{Card::Env[:protocol]}#{Card::Env[:host]}"\
        "/#{duplicated_card.cardname.url_key}"
  fill_in(field, with: url)
end

Then /^Within "([^\"]*)" I should not see "([^\"]*)"$/ do |section, text|
  # page.should have_css(, :text => "[Name]")
  within(section) do
    expect(page).not_to have_content(text)
  end
end

Then /^I expect element "([^\"]*)" exists$/ do |selector|
  expect(page).to have_css(selector)
end

When /^(?:|I )solocomplete "([^"]*)" within "([^"]*)"$/ do |value, scope_selector|
  within(scope_selector) do
    find('.chosen-single').click
    find('.chosen-search input').set value
    find('.chosen-results li').click
  end
end

When /^I edit card "([^\"]*)"$/ do |cardname|
  visit "/card/edit/#{cardname.to_name.url_key}"
end

fill_rg = /^(?:|I )fill in "([^"]*)" field with "([^"]*)" within "([^"]*)"$/
When fill_rg do |selector, value, scope_selector|
  within(scope_selector) do
    find(selector).set value
  end
end
fill_rg = /^(?:|I )fill in "([^"]*)" with "([^"]*)" within "([^"]*)"$/
When fill_rg do |selector, value, scope_selector|
  within(scope_selector) do
    fill_in(selector, with: value)
  end
end
