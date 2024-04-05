import { Page } from "@playwright/test";
import { urlConstants } from "../constants/urlConstants";
import { PlayWrightWrapper } from "../utils/playwright";

export class simpleLogin extends PlayWrightWrapper{
 
    /*Code for simple login
    page: Page;
    constructor (page: Page){
        this.page =page;
    }

    public async navigate(){
        await this.page.goto("https://login.salesforce.com/");
    }
    */
   static pageUrl = urlConstants.baseURL;
   constructor(page: Page){
        super(page);
        this.loadApp(simpleLogin.pageUrl);
   }

    public async getLogin(username: string, password: string){
        
        await this.type(".username","username",username);
        await this.type(".password","pw",password);
        // await this.page.locator("[name='username']").fill(username);
        // await this.page.locator("[name='pw']").fill(password);

        await this.page.locator("[name='Login']").click(); // click method from wrapper class is not working here
        await this.page.waitForTimeout(10000);

        // stores the login condition !
        await this.page.context().storageState({path:"salesforceLogin.json"});
    }
    
}