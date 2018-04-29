package stepdefs;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;

import java.util.concurrent.TimeUnit;


public class LoginStepDefinitions {

    private static boolean initialized = false;

    private WebDriver webDriver;

    @Before
    public void setUp() throws Exception {
        if (!initialized) {
            System.setProperty("webdriver.gecko.driver", "C:/geckodriver-v0.20.1-win64/geckodriver.exe");
            webDriver = new FirefoxDriver();
            webDriver.manage().timeouts().implicitlyWait(1, TimeUnit.MINUTES);
            initialized = true;
        }
    }

    public WebDriver getDriver() {
        return webDriver;
    }

    @Given("^I am in https://app\\.plus500\\.com/ webpage$")
    public void i_am_in_https_app_plus_com_webpage() throws Throwable {

        webDriver.get("https://app.plus500.com/");

    }

    @When("^I press demo mode$")
    public void i_press_demo_mode() throws Throwable {
        WebElement demoMode = webDriver.findElement(By.id("demoMode"));
        demoMode.click();
        WebElement login = webDriver.findElement(By.id("newUserCancel"));
        login.click();

    }

    @When("^I enter email (.*) and password (.*)$")
    public void i_enter_email_and_password(String email, String password) throws Throwable {
        WebElement emailInput = webDriver.findElement(By.id("email"));
        WebElement passwoedInput = webDriver.findElement(By.id("password"));
        emailInput.sendKeys(email);
        passwoedInput.sendKeys(password);
    }

    @When("^I press login button$")
    public void i_press_login_button() throws Throwable {
        WebElement loginButton = webDriver.findElement(By.id("submitLogin"));
        loginButton.click();
    }

    @Then("^I see trade page$")
    public void i_see_trade_page() {
        try {
            webDriver.findElement(By.id("notification_center_button"));
        } catch (Exception e) {
            e.printStackTrace();
            webDriver.close();
        }
    }
}
