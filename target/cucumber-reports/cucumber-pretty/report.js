$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Profile",
  "description": "",
  "id": "login-profile",
  "keyword": "Feature"
});
formatter.before({
  "duration": 149029,
  "status": "passed"
});
formatter.before({
  "duration": 7163006426,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Try to login to https://app.plus500.com/ webpage",
  "description": "",
  "id": "login-profile;try-to-login-to-https://app.plus500.com/-webpage",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am in https://app.plus500.com/ webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I press demo mode",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I enter email aurimasjank@gmail.com and password cucumbertest",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I press login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I see trade page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.i_am_in_https_app_plus_com_webpage()"
});
formatter.result({
  "duration": 3924647206,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.i_press_demo_mode()"
});
formatter.result({
  "duration": 501866146,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "aurimasjank@gmail.com",
      "offset": 14
    },
    {
      "val": "cucumbertest",
      "offset": 49
    }
  ],
  "location": "LoginStepDefinitions.i_enter_email_and_password(String,String)"
});
formatter.result({
  "duration": 181128424,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.i_press_login_button()"
});
formatter.result({
  "duration": 3154805320,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.i_see_trade_page()"
});
formatter.result({
  "duration": 268810795,
  "status": "passed"
});
formatter.after({
  "duration": 112079,
  "status": "passed"
});
});