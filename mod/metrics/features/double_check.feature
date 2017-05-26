@javascript
Feature: Double check
  As signed in user I can double check and request checks for metric values

  Scenario: Check and undo
    When I am signed in as Joe User
    And I go to card "Jedi+disturbances in the Force+Death Star+2000"
    Then I should see "Double check"
    When I hover over "Double check"
    And I click on "Yes, I checked the value"
    And I click on "Yes, I checked the value"
    # FIXME: It used to work with a single click
        #   but at some point I had to introduce a second
        #   click to click the button once.
    Then I should see "Yes, I checked the value"

    When I am signed in as Joe Admin
    And I go to card "Jedi+disturbances in the Force+Death Star+2000"
    Then I should see "Joe User checked the value"
  #  When I click on "Joe User checked the value"
  #  Then I should see "Yes, I checked the value"
  #  When I click on icon "times-circle-o"
  #  Then I should see "Joe User checked the value"

    When I am signed in as Joe User
    And I go to card "Jedi+disturbances in the Force+Death Star+2000"
    And I click on the "remove" icon
  Then I should see "Double check"

  Scenario: Request check, check and undo
    When I am signed in as Joe User
    And I go to card "Jedi+disturbances in the Force+Death Star+2000"
    And I edit "Jedi+disturbances in the Force+Death Star+2000"
    And I check "Request that another researcher double checks this value"
    And I submit
    Then I should see "Double check requested by Joe User"

    When I am signed in as Joe Admin
    And I go to card "Jedi+disturbances in the Force+Death Star+2000"
    And I click on "Double check requested by Joe User"
    Then I should see "Yes, I checked the value"

    When I click on the "remove" icon
    # move focuse away from double check button
    And I hover over "Joe Admin"
    Then I should see "Double check requested by Joe User"
    When I edit "Jedi+disturbances in the Force+Death Star+2000"
    Then I should not see "Request that another researcher double checks this value"

    When I am signed in as Joe User
    And I edit "Jedi+disturbances in the Force+Death Star+2000"
    And I uncheck "Request that another researcher double checks this value"
    And I submit
    Then I should see "Double check"
    And I should not see "requested by Joe User"

  Scenario: Check is removed if value is edited
    When I am signed in as Joe User
    And I go to card "Jedi+disturbances in the Force+Death Star+2000"
    When I click on "Double check"
    Then I should see "Yes, I checked the value"
    When I edit "Jedi+disturbances in the Force+Death Star+2000"
    And I fill in "no" for "Answer"
    And I submit
    Then I should not see "Yes, I checked the value"
    And I should see "Double check"

  Scenario: Can't check if not signed in
    When I go to card "Jedi+disturbances in the Force+Death Star+2000"
    And I click on "Double check"
    Then I should see "please sign in"
