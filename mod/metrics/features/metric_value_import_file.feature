@javascript
Feature: import metric values from a csv file
  A user can create metric values from a CSV file

  Background:
    Given I am signed in as Joe User
    And I go to new Metric Value Import File
    And I fill in "card_name" with "Strikes tmr?"
    And I upload the metric_value_import_file "metric_values_import.csv" in mod
    And I wait for ajax response
    And I press "Submit"
    And I wait for ajax response
    And I maximize the browser
    And I uncheck all checkboxes
    And I scroll -1000 pixels

  Scenario: Show import table correctly
    Then I should see a row with "Jedi+Sith Lord in Charge|Death Star|2015|One country, two systems|https://en.wikipedia.org/wiki/One_country,_two_systems|just kidding"
    And I should see a row with "Joe User+researched|Apple|2008|11|http://srivigneshwar.com/home/?zs"
    And I should see a row with "Joe User+researched|Hong Kong|2008|11|http://srivigneshwar.com/home/?q"

  Scenario: Import a simple metric value
    When I check checkbox in row 1
    And I press "Import"
    And I wait for ajax response
    And I go to card "Jedi+Sith Lord in Charge+Death Star+2015"
    Then I should see "2015"
    Then I should see "One country, two systems"
    Then I should see a comment icon
    Then I should see "just kidding"

  Scenario: Import simple metric values with same source
    When  I check checkbox in row 1
    And I check checkbox in row 2
    And I press "Import"
    And I wait for ajax response
    And I go to card "Jedi+Sith Lord in Charge+Death Star+2015"
    Then I should see "2015"
    Then I should see "One country, two systems"
    Then I should see a comment icon
    Then I should see "just kidding"
    And I go to card "Jedi+Sith Lord in Charge+Death Star+2014"
    Then I should see "2014"
    And I should see "HKSAR?"
    And I should not see a comment icon

  Scenario: Import duplicated metric values with a same source
    When I check checkbox in row 3
    And I press "Import"
    And I wait for ajax response
    And I scroll -10000 pixels
    And I follow "Import ..."
    And I uncheck all checkboxes
    And I check checkbox in row 4
    And I press "Import"
    And I wait for ajax response
    Then I should see "Metric values exist and are not modified."
    And I should see "Joe User+researched+Apple_Inc+2009"

  Scenario: Import duplicated metric values with a different source
    When I check checkbox in row 3
    And I press "Import"
    And I wait for ajax response
    And I scroll -10000 pixels
    And I follow "Import ..."
    And I uncheck all checkboxes
    And I check checkbox in row 5
    And I press "Import"
    And I wait for ajax response
    Then I should see "Metric values exist with different source and are not modified."
    And I should see "Joe User+researched+Apple_Inc+2009"

  Scenario: Import metric values conflict with existing value
    When I check checkbox in row 3
    And I press "Import"
    And I wait for ajax response
    And I scroll -10000 pixels
    And I follow "Import ..."
    And I uncheck all checkboxes
    And I check checkbox in row 6
    And I press "Import"
    And I wait for ajax response
    # And debug
    Then I should see "Problems with Strikes tmr?"
    And I should see "ROW 6:JOE USER+RESEARCHED+APPLE_INC+2009+METRIC VALUE: value '10' exists"

  Scenario: Import a metric value with partial matching company
    When I check checkbox in row 7
    And I press "Import"
    And I wait for ajax response
    And I go to card "Joe User+researched+Apple_Inc+2008"
    Then I should see "2008"
    And I should see "11"
    And I should not see a comment icon

  Scenario: Import a metric value with no matching
    When I check checkbox in row 8
    And I press "Import"
    And I wait for ajax response
    And I go to card "Joe User+researched+Hong Kong+2008"
    Then I should see "2008"
    And I should see "11"
    And I should not see a comment icon

  Scenario: Import a metric value with corrected company name
    When I check checkbox in row 7
    And I fill in "Samsung" in row 7
    And I press "Import"
    And I wait for ajax response
    And I go to card "Joe User+researched+Samsung+2008"
    Then I should see "2008"
    And I should see "11"
    And I should not see a comment icon
    When I go to card "Samsung+aliases"
    And I should see "Apple"
