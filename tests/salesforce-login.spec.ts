import { test } from "@playwright/test";
import { log } from "console";
import { simpleLogin } from "../pages/simpleLogin";

test(`TC001: Verify Salesforce Login with valid credentials`, async({page})=>{

        const simpleLoginPage = new simpleLogin(page);
  //      await simpleLoginPage.navigate();
        await simpleLoginPage.getLogin("Thanmayi321@gmail.com","Playwright2024");
    //   await loginPage.doLogin("Thanmayi321@gmail.com","Playwright2024");


})
