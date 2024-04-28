import { Locator, Page } from "playwright";
import { AppConstants } from "../constants/AppConstants";
import { BasePage } from "../utils/BasePage";
import { expect } from "playwright/test";

export class SalesHomePage extends BasePage{

    //locators
    readonly anchorLocator: Locator;

    constructor(page: Page) {
        super(page);
        this.anchorLocator = this.page.getByText('Quarterly Performance',{exact: true});
        
    }

    async load(): Promise<void> {
        await this.loadUrl(AppConstants.SETUP_HOMEPAGE_URL);
    }

    async verifyIfPageHasLoaded(): Promise<void> {
       await expect(
        this.anchorLocator,
        `expecting sales page anchor element to be visible`,
       ).toBeVisible();
    }   
    
}