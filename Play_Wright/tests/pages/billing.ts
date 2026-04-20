import { expect, type Locator, type Page } from "@playwright/test";
export class Billing {
  //========================locators==============================
  readonly page: Page;
  readonly FirstName: Locator;
  readonly LastName: Locator;
  readonly Email: Locator;
  readonly BillingNewAddress_City: Locator;
  readonly BillingNewAddress_Address1: Locator;
  readonly BillingNewAddress_ZipPostalCode: Locator;
  readonly BillingNewAddress_PhoneNumber: Locator;
  readonly BillingNewAddress_CountryId: Locator;
  readonly Billing: Locator;
  readonly termsofservice: Locator;
  readonly checkout: Locator;
  readonly option: Locator;
  readonly wrong: Locator;
  readonly shipingaddress: Locator;
  readonly shipingmethod: Locator;
  readonly visa: Locator;
  readonly visaselct: Locator;
  readonly Cardholdername: Locator;
  readonly Cardnumber: Locator;
  readonly Cardcode: Locator;
  readonly pymentstep: Locator;
  readonly finsh: Locator;
  readonly finalfinsh: Locator;
  //========================variables=============================
  //========================constructor===========================
  constructor(page: Page) {
    this.page = page;
    this.FirstName = page.locator("//input[@id='BillingNewAddress_FirstName']");
    this.LastName = page.locator("//input[@id='BillingNewAddress_LastName']");
    this.Email = page.locator("//input[@id='BillingNewAddress_Email']");
    this.BillingNewAddress_City = page.locator(
      "//input[@id='BillingNewAddress_City']",
    );
    this.BillingNewAddress_Address1 = page.locator(
      "//input[@id='BillingNewAddress_Address1']",
    );
    this.BillingNewAddress_ZipPostalCode = page.locator(
      "//input[@id='BillingNewAddress_ZipPostalCode']",
    );
    this.BillingNewAddress_PhoneNumber = page.locator(
      "//input[@id='BillingNewAddress_PhoneNumber']",
    );
    this.BillingNewAddress_CountryId = page.getByTestId(
      "BillingNewAddress_CountryId",
    );

    this.option = page.locator("option[value='1']");
    this.Billing = page.locator("//input[@onclick='Billing.save()']");
    this.wrong = page.locator("//span[normalize-space()='Wrong email']");

    this.termsofservice = page.locator("//input[@id='termsofservice']");
    this.checkout = page.locator("//button[@id='checkout']");
    //input[@onclick='Billing.save()']
    this.shipingaddress = page.locator("//input[@onclick='Shipping.save()']");
    this.shipingmethod = page.locator(
      "//input[@class='button-1 shipping-method-next-step-button']",
    );
    this.visa = page.locator("(//input[@id='paymentmethod_2'])[1]");
    this.visaselct = page.locator(
      "(//input[@class='button-1 payment-method-next-step-button'])[1]",
    );

    this.Cardholdername = page.locator("//input[@id='CardholderName']");
    this.Cardnumber = page.locator("//input[@id='CardNumber']");
    this.Cardcode = page.locator("//input[@id='CardCode']");
    // (//input[@id='paymentmethod_2'])[1]
    this.pymentstep = page.locator(
      "//input[@class='button-1 payment-info-next-step-button']",
    );
    this.finsh = page.locator("//input[@value='Confirm']");
    this.finalfinsh = page.locator(
      "//strong[normalize-space()='Your order has been successfully processed!']",
    );
  }

  //========================methods===============================
  //------------------------Action---------------------------------
  async termsofservices() {
    await this.termsofservice.click();
    await this.checkout.click();
  }
  async billing(
    FirstName: string,
    LastName: string,
    Email: string,
    BillingNewAddress_City: string,
    BillingNewAddress_Address1: string,
    BillingNewAddress_ZipPostalCode: string,
    BillingNewAddress_PhoneNumber: string,
  ) {
    await this.FirstName.fill(FirstName);
    await this.LastName.fill(LastName);
    await this.Email.fill(Email);
    await this.BillingNewAddress_City.fill(BillingNewAddress_City);
    await this.BillingNewAddress_Address1.fill(BillingNewAddress_Address1);
    await this.BillingNewAddress_ZipPostalCode.fill(
      BillingNewAddress_ZipPostalCode,
    );
    await this.BillingNewAddress_PhoneNumber.fill(
      BillingNewAddress_PhoneNumber,
    );

    await this.BillingNewAddress_CountryId.click;
    await this.option.click;

    await this.Billing.click();
  }
  async bill() {
    await this.Billing.click();
    await this.shipingaddress.click();
    await this.shipingmethod.click();
    await this.visa.click();
    await this.visaselct.click();
  }
  async visainfo(Cardholdername: string, Cardnumber: string, Cardcode: string) {
    await this.Cardholdername.fill(Cardholdername);
    await this.Cardnumber.fill(Cardnumber);
    await this.Cardcode.fill(Cardcode);
  }
  async pymentstepnext() {
    await this.pymentstep.click();
    await this.finsh.click();
  }

  //------------------------assert-------------------------------
  async assertBilling() {
    await expect(this.wrong).toBeVisible();
  }
  async assertfinsh() {
    await expect(this.finalfinsh).toBeVisible();
  }
}
