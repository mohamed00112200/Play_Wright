import { expect, type Locator, type Page } from "@playwright/test";
export class RegisterPage {
  //========================locators==============================
  readonly page: Page;
  readonly FirstName: Locator;
  readonly LastName: Locator;
  readonly Email: Locator;
  readonly Password: Locator;
  readonly ConfirmPassword: Locator;
  readonly registerButton: Locator;
  readonly validLoginMessage: Locator;
  readonly invalidLoginMessage: Locator;
  readonly invalidLoginMessage2: Locator;
  //========================variables=============================
  url: string = "https://demowebshop.tricentis.com/register";
  //========================constructor===========================
  constructor(page: Page) {
    this.page = page;
    this.FirstName = page.locator("//input[@id='FirstName']");
    this.LastName = page.locator("//input[@id='LastName']");
    this.Email = page.locator("//input[@id='Email']");
    this.Password = page.locator("//input[@id='Password']");
    this.ConfirmPassword = page.locator("//input[@id='ConfirmPassword']");
    this.registerButton = page.locator("//input[@id='register-button']");
    this.validLoginMessage = page.locator("//div[@class='result']");
    this.invalidLoginMessage = page.locator(
      "//li[normalize-space()='The specified email already exists']",
    );
    this.invalidLoginMessage2 = page.locator("//span[@for='Email']");
  }

  //========================methods===============================
  //------------------------Action---------------------------------
  async open() {
    await this.page.goto(this.url);
  }
  async register(
    FirstName: string,
    LastName: string,
    Email: string,
    Password: string,
    ConfirmPassword: string,
  ) {
    await this.page.goto(this.url);
    await this.FirstName.fill(FirstName);
    await this.LastName.fill(LastName);
    await this.Email.fill(Email);
    await this.Password.fill(Password);
    await this.ConfirmPassword.fill(ConfirmPassword);
    await this.registerButton.click();
  }
  //------------------------assert-------------------------------
  async assertvalidregister() {
    await expect(this.validLoginMessage).toBeVisible();
  }
  async assertinvalidregister() {
    await expect(this.invalidLoginMessage).toBeVisible();
  }
  async assertinvalidregister2() {
    await expect(this.invalidLoginMessage2).toBeVisible();
  }
}
