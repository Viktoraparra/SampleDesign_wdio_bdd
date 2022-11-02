Feature: Practice Securitize

  @sanity
  Scenario Outline: TC001 - As a user want to log in verify Do1 and Do2 buttons
    Given Navigating to practice page contains <title>
    When I login with <username> and <password>
    Then verify button Do1 and do2 behavior of availability
    Examples:
      | title            | username | password |
      | Automation test  | admin    | admin    | 
@sanity
Scenario Outline: TC002 - As a user want to log in validate increment and decrease of text
    Given Navigating to practice page contains <title>
    When I login with <username> and <password>
    Then increment text size and validate increment
    Then descrease text size and validate decrease
    Examples:
      |title                 | username | password |
      | Automation test login| admin    | admin    | 
@sanity
Scenario Outline: TC003 - As a user want to log in validate increment and decrease of text
    Given Navigating to practice page contains <title>
    When I login with <username> and <password>
    Then place background <color> and verify color change of background
    Examples:
      |title                 | username | password | color  |
      | Automation test login| admin    | admin    | orange |
 
