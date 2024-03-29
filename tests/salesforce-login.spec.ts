import { test } from "@playwright/test";
import { LoginPage } from "../pages/login";
import { log } from "console";

test(`Login to salesforce`, async({page})=>{

        const loginPage = new LoginPage(page);
        // await loginPage.navigate();
        await loginPage.doLogin("Thanmayi321@gmail.com","Playwright2024");


})
