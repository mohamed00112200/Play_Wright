import { test, expect } from "@playwright/test";
import jsonValidData from "../../../testData/testUsers_valid_info.json";
import jsonInValidData from "../../../testData/testUsre_Invaid_info.json";
import { POManager } from "../../pages/poManger.ts";

const parseValidData = JSON.parse(JSON.stringify(jsonValidData));
const parseInValidData = JSON.parse(JSON.stringify(jsonInValidData));

let PO: POManager;

//============================before and after class================================================================

test.beforeAll("START TEST", async () => {
  await console.log("Starting login tests");
});
test.beforeEach("BEFORE EACH TEST", async ({ page }) => {
  PO = new POManager(page);

  await console.log("Starting a new test");
});
test.afterEach("AFTER EACH TEST", async () => {
  await console.log("Test completed");
});
test.afterAll("END TEST", async () => {
  await console.log("All login tests completed");
});

//================================== test 1 [register (class=> RegisterPage)]==========================================================

test.describe("register test", () => {
  // TC-01: valid register
  test("TC-01: new costomer valid register @smoke", async () => {
    //   opject وباخد منها classes page يحتوي علي كل ال (POManager) class انا عملت
    //  PO.getRegisterPage().register هتلاقي
    //opject PO  وياخد PO = new POManager(page);معناه ان هوة هيروح
    // RegisterPage <=class  من  opject  و هيا بترجع  getRegisterPage() الي اسمهاfuctionو يستدعي ال
    //  RegisterPage <=classاللي موجوده في fuction register()و يستدعي
    await PO.getRegisterPage().register(
      "Imm",
      "Imm",
      "user" + Math.floor(Math.random() * 1000000) + "@gmail.com",
      "mmmmmm",
      "mmmmmm",
    );
    await PO.getRegisterPage().assertvalidregister();
    await PO.getRegisterPage().register(
      "Imm",
      "Imm",
      "user" + Math.floor(Math.random() * 1000000) + "@gmail.com",
      "mmmmmm",
      "mmmmmm",
    );
    await PO.getRegisterPage().assertvalidregister();
    await PO.getRegisterPage().register(
      "Imm",
      "Imm",
      "user" + Math.floor(Math.random() * 1000000) + "@gmail.com",
      "mmmmmm",
      "mmmmmm",
    );
    await PO.getRegisterPage().assertvalidregister();
  });

  //TC-02: invalid register
  test("TC-02: invalid exist email register @regression", async () => {
    await PO.getRegisterPage().register(
      "I",
      "I",
      "mkm05927777@gmail.com",
      "mmmmmm",
      "mmmmmm",
    );
    await PO.getRegisterPage().assertinvalidregister();
  });

  // extra text (bug)
  test("invalid register2 extra text (bug) userxxxxxxx@gm-ail.com", async () => {
    await PO.getRegisterPage().register(
      "I",
      "I",
      "user" + Math.floor(Math.random() * 1000000) + "@gm-ail.com",
      "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm",
      "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm",
    );
    await PO.getRegisterPage().assertinvalidregister2();
  });
});
//================================== test 2 [login (class=> LoginPage)]==========================================================

test.describe("login test", () => {
  // TC-03: valid login
  test("TC-03: valid login @smoke", async () => {
    await PO.getLoginPage().login("m6723423@gmail.com", "mmmmmm");
    await PO.getLoginPage().assertvalidlogin();
  });
  //TC-04: invalid password login
  test("TC-04: invalid password login @regression", async () => {
    await PO.getLoginPage().login("m6723423@gmail.com", "Invalid");
    await PO.getLoginPage().assertinvalidPassworlogin();
  });
  //TC-05: invalid username login
  test("TC-05: invalid username login @regression", async () => {
    await PO.getLoginPage().login("Invalid", "mmmmmm");
    await PO.getLoginPage().assertinvaliduserNamelogin();
  });
});

//================================== test 3 [add to card (class=> Addtocard)]==========================================================

test.describe("add to card", () => {
  // TC-06: add to card
  test("TC-06: add to card @smoke", async () => {
    //login
    await PO.getLoginPage().login("mkm05927777@gmail.com", "mmmmmm");
    // books
    await PO.addtocard.addtocard();
    // addcard
    await PO.addtocard.assertshopingcard();
    //shopingcard
    await PO.addtocard.dirtocard();
    // check qu.
    await PO.addtocard.assertQty();
  });
});

//================================== test 4 ()["card (class=>Card )]==========================================================
test.describe("cart page", () => {
  // TC-07: applay dicount code
  test("TC-07: applay dicount code @regression", async () => {
    //login
    await PO.getLoginPage().login("mkm05927777@gmail.com", "mmmmmm");
    // books
    await PO.addtocard.addtocard();
    //shopingcard
    await PO.addtocard.dirtocard();
    //discount
    await PO.card.carddiscount("AutomationDiscount2");
    await PO.card.assertapplaydicountcode();
  });
  // TC-08: terms of service valiation
  test("TC-08: terms of service valiation @regression", async () => {
    //login
    await PO.getLoginPage().login("mkm05927777@gmail.com", "mmmmmm");
    // books
    await PO.addtocard.addtocard();
    //shopingcard
    await PO.addtocard.dirtocard();

    //termsOfService
    await PO.card.termsOfService();
    await PO.card.asserttermsOfServiceValiation();
  });
});

//================================== test 5 ["billing (class=> Billing)]==========================================================
test.describe("billing page", () => {
  // TC-09: billing address
  test("TC-09: billing address @regression", async () => {
    //login
    await PO.getLoginPage().login("m6723423@gmail.com", "mmmmmm");
    // books
    await PO.addtocard.addtocard();
    //shopingcard
    await PO.addtocard.dirtocard();

    //termsOfService
    await PO.billing.termsofservices();

    await PO.billing.billing(
      "4",
      "7",
      "k++--@hh.kkk",
      "5454",
      "54545",
      "omkm",
      "plpl",
    );
    await PO.billing.assertBilling();
  });
  // TC-10: End to End placement
  test("TC-10: End to End placement @smoke", async () => {
    await PO.getLoginPage().login("m6723423@gmail.com", "mmmmmm");
    // books
    await PO.addtocard.addtocard();
    //shopingcard
    await PO.addtocard.dirtocard();

    //termsOfService
    await PO.billing.termsofservices();
    await PO.billing.bill();
    //visainfo with json file
    await PO.billing.visainfo(
      parseValidData.cardHolder,
      parseValidData.cardNumber,
      parseValidData.cvv,
    );
    await PO.billing.pymentstepnext();
    await PO.billing.assertfinsh();
  });
});
