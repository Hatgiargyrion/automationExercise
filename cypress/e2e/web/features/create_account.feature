Feature: User
  Background: Acess home
    Given the user accesses the Automation Exercise home page

  Scenario: Successful account creation
    When the user navigates to the Signup Login page
    And fill out the pre-form with your name and email
    And fills in the registration form with valid personal and address details
    And submits the registration
    Then the account should be created successfully