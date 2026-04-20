import { expect, type Locator, type Page } from "@playwright/test";
export class LoginPage {
  //========================locators==============================
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly validLoginMessage: Locator;
  readonly invalidpasswordLogin: Locator;
  readonly invalidusernameLogin: Locator;
  //========================variables=============================
  url: string = "https://demowebshop.tricentis.com/login";
  //========================constructor===========================
  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator("//input[@id='Email']");
    this.passwordInput = page.locator("//input[@id='Password']");
    this.loginButton = page.locator("//input[@value='Log in']");
    this.validLoginMessage = page.locator("//a[normalize-space()='Log out']");
    this.invalidpasswordLogin = page.locator(
      "//span[contains(text(),'Login was unsuccessful. Please correct the errors ')]",
    );
    this.invalidusernameLogin = page.locator("//span[@for='Email']");
  }

  //========================methods===============================
  //------------------------Action---------------------------------

  async login(username: string, password: string) {
    await this.page.goto(this.url);
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
  //------------------------assert-------------------------------
  async assertvalidlogin() {
    await expect(this.validLoginMessage).toBeVisible();
  }
  async assertinvalidPassworlogin() {
    await expect(this.invalidpasswordLogin).toBeVisible();
  }
  async assertinvaliduserNamelogin() {
    await expect(this.invalidusernameLogin).toBeVisible();
  }
}
