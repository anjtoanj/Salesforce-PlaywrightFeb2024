import test, { Locator, Page } from "@playwright/test";
import { AppConstants } from "../constants/AppConstants";
import { BasePage } from "../utils/BasePage";

export class LoginPage extends BasePage{
 
  readonly userName: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;

  constructor(readonly page: Page){
        super(page);
        // initializing the locator
        this.userName =this.page.locator("[name='username']");
        this.password =this.page.locator("[name='pw']");
        this.loginButton = this.page.locator("[name='Login']");
   }

  async load(): Promise<void>{
        await this.loadUrl(AppConstants.LOGIN_PAGE_URL);
   }

  async verifyIfPageHasLoaded(): Promise<void> {
        await this.isLocatorVisible(this.loginButton,{
            assertionStatement: `Expecting login page to be loaded`,
    });
  }  
  
  public async doLogin(userName: string, password: string){
        await test.step(`Login to salesforce with username ${userName}`, async ()=>{
            await this.fillIn(this.userName, userName);
            await this.fillIn(this.password, password);
            await this.clickOn(this.loginButton);
        })
   }    
}