@javascript
Feature: metric value
   As signed in user I want to be able to add a metric value on metric page.

Background:
  Given I am signed in as Joe User
  And I wait until ajax response done

  Scenario: Adding a metric value with a link source on metric page
    When I go to card "Jedi+disturbances in the Force"
    And I wait until ajax response done
    And In the main card content I click "Add new value"
    And I fill in company with "Death Star"
    And I click on "Next"
    And I fill in "pointer_item" with "2015"
    And I single-select "yes" from "Value"
    And I click on "Add a new source"
    And I fill in "URL" with "http://example.com"
    And I click on "Add and preview"
    Then I should not see "Problems"
    And I should see "Example Domain"
    And I should see "added less than a minute ago"
    And I click on "Cite!"
    And I click on "Submit"
    # FIXME the new metric should appear witout reloading the page
    And I go to card "Jedi+disturbances in the Force"
    Then I should see "Death Star"
    When I go to card "Death Star"
    Then I should see "disturbances in the Force"
    Then I should see "yes"

Scenario: Adding a metric value with a file source on metric page
  When I go to card "Jedi+disturbances in the Force"
  And I wait until ajax response done
  And In the main card content I click "Add new value"
  And I fill in company with "Death Star"
  And I click on "Next"
  And I fill in "pointer_item" with "2015"
  And I single-select "yes" from "Value"
  And I click on "Add a new source"
  And I click on "File"
  And I upload the file "file.txt"
  And I wait until ajax response done
  Then I should see "file.txt 9 Bytes"
  And I click on "Add and preview"
  Then I should not see "Problems"
  And I should see "title needed"
  And I should see "added less than a minute ago"
  And I click on "Cite!"
  And I click on "Submit"
  # FIXME the new metric should appear witout reloading the page
  And I go to card "Jedi+disturbances in the Force".
  Then I should see "Death Star"
  When I go to card "Death Star"
  Then I should see "disturbances in the Force"
  And I should see "yes"
