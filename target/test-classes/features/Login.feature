Feature: Login Profile

  Scenario: Try to login to https://app.plus500.com/ webpage
    Given I am in https://app.plus500.com/ webpage
    When I press demo mode
    And I enter email aurimasjank@gmail.com and password cucumbertest
    And I press login button
    Then I see trade page