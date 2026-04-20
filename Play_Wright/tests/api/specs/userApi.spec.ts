import { test, expect } from "@playwright/test";
import userRequests from "../endpoints/userEndPoint";
let response;
let jsonResponse;
test.describe("User Api test", () => {
    test("user response", async ({ request }) => {
        response = await userRequests.getUsers(request);
        jsonResponse = await response.json();
        console.log(jsonResponse);
        console.log(jsonResponse.length);
        expect(response.status()).toBe(200);
        // expect(jsonResponse.length).toBe(100);

    });
})