import { Page } from "@playwright/test";
import { PLayWrightWrapper } from "../utils/playwright";
import { urlConstants } from "../constants/urlConstants";

export class LoginPage extends PLayWrightWrapper{
  
     static pageUrl = urlConstants.baseURL;

     constructor(page: Page){
        super(page); 
        this.loadApp(LoginPage.pageUrl);       
     }

     public async doLogin(username: string, password: string){
        await this.type(".username","username", username);
        await this.type(".password","password",password);
        await this.page.waitForTimeout(2000);
        await this.page.locator('[type="submit"]').click; // check this 
        await this.page.waitForTimeout(6000);

       // await this.page.context().storageState({path:"salesforceloginstate.json"});
     }

}