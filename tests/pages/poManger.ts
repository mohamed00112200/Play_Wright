import { test, expect, Page } from "@playwright/test";
import { LoginPage } from "../pages/loginPage.ts";
import { RegisterPage } from "./registerPage.ts";
import { Addtocard } from "./addtoCard.ts";
import { Card } from "./card.ts";
import { Billing } from "./billing.ts";
export class POManager {
  readonly page: Page;
  readonly loginPage: LoginPage;
  readonly registerPage: RegisterPage;
  readonly addtocard: Addtocard;
  readonly card: Card;
  readonly billing: Billing;
  constructor(page: Page) {
    this.page = page;
    this.loginPage = new LoginPage(this.page);
    this.registerPage = new RegisterPage(this.page);
    this.addtocard = new Addtocard(this.page);
    this.card = new Card(this.page);
    this.billing = new Billing(this.page);
  }
  getLoginPage() {
    return this.loginPage;
  }
  getRegisterPage() {
    return this.registerPage;
  }
  getAddtocard() {
    return this.registerPage;
  }
  getCard() {
    return this.card;
  }
  getBilling() {
    return this.card;
  }
}
