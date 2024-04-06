import { test } from "@playwright/test";

import { LoginPage } from "../pages/loginPage";
import { FeatureTags } from "../constants/featureTags";
import { FrameWorkUtil } from "../utils/frameworkUtil";
import { Environment } from "../constants/envConstants";
import { AppConstants } from "../constants/AppConstants";

test.describe(`SalesForce ${FeatureTags.LOGIN}`, async () =>{
    test(`TC001: Verify SalesForce Login with valid credentials`, async({ page })=>{
        const appData = FrameWorkUtil.loadAppTestData(Environment.STAGE);
        const sfLoginPage = new LoginPage(page);
        await sfLoginPage.load();
        await sfLoginPage.verifyIfPageHasLoaded();
        await sfLoginPage.doLogin(appData.adminUserName, appData.adminPassword);
        await sfLoginPage.verifyPageHasNavigatedTo(AppConstants.INSTANCE_URL);
        await page.context().storageState({ path: '.auth/credentials.json'});
    })
})
 
