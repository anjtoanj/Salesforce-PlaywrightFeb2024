import { Locator, Page } from "playwright";
import { BaseComponent } from "./BaseComponent";
import test from "playwright/test";


export class NavBarComponents extends BaseComponent {

    readonly appLauncher: Locator;
    
    constructor(readonly page: Page){
        super(page);
        this.appLauncher = this.page.locator('div.slds-icon-waffle');
         
    }
    // async clickOnAppLauncher(){
    //     await test.step(`Clicking on app launcher`, async()=>{
    //         await this.clickOn(this.appLauncher);
    //     });
    //     return new this.AppLauncher(this.page);
    // }
}