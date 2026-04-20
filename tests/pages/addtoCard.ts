import { expect, type Locator, type Page } from "@playwright/test";
export class Addtocard {
  //========================locators==============================
  readonly page: Page;
  readonly books: Locator;
  readonly productitem: Locator;
  readonly addcard: Locator;
  readonly shopingcard: Locator;
  readonly Qty: Locator;
  //========================variables=============================
  //========================constructor===========================
  constructor(page: Page) {
    this.page = page;
    this.books = page.locator(
      "//ul[@class='top-menu']//a[normalize-space()='Books']",
    );
    this.productitem = page.locator(
      "//div[@class='product-item']//img[@title='Show details for Computing and Internet']",
    );
    this.addcard = page.locator("//input[@id='add-to-cart-button-13']");
    this.shopingcard = page.locator("//a[normalize-space()='shopping cart']");
    this.Qty = page.locator("//span[@class='product-subtotal']");
  }

  //========================methods===============================
  //------------------------Action---------------------------------

  async addtocard() {
    await this.books.click();
    await this.productitem.click();
    await this.addcard.click();
  }
  async dirtocard() {
    await this.shopingcard.click();
  }

  //------------------------assert-------------------------------
  async assertshopingcard() {
    await expect(this.shopingcard).toBeVisible();
  }
  async assertQty() {
    await expect(this.Qty).toBeVisible();
  }
}
