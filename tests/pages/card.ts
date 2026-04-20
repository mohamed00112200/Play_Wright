import { expect, type Locator, type Page } from "@playwright/test";
export class Card {
  //========================locators==============================
  readonly page: Page;
  readonly discountcouponcode: Locator;
  readonly applaycoupon: Locator;
  readonly applaydicountcode: Locator;
  readonly termsOfServiceValiation: Locator;
  readonly assertValiation: Locator;

  //========================variables=============================
  //========================constructor===========================
  constructor(page: Page) {
    this.page = page;
    this.discountcouponcode = page.locator(
      "//input[@name='discountcouponcode']",
    );
    this.applaycoupon = page.locator(
      "//input[@name='applydiscountcouponcode']",
    );
    this.applaydicountcode = page.locator("//div[@class='message']");

    this.termsOfServiceValiation = page.locator("//button[@id='checkout']");
    this.assertValiation = page.locator(
      "//p[contains(text(),'Please accept the terms of service before the next')]",
    );
  }
  //========================methods===============================
  //------------------------Action---------------------------------

  async carddiscount(coupon: string) {
    await this.discountcouponcode.fill(coupon);
    await this.applaycoupon.click();
  }
  async termsOfService() {
    await this.termsOfServiceValiation.click();
  }

  //------------------------assert-------------------------------

  async assertapplaydicountcode() {
    await expect(this.applaydicountcode).toBeVisible();
  }
  async asserttermsOfServiceValiation() {
    await expect(this.assertValiation).toBeVisible();
  }
}
