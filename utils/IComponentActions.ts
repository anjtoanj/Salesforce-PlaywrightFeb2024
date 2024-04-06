import { Locator } from "@playwright/test";
export interface IComponentActions{

    fillIn(locateUsing: Locator | string, textToEnter: string): Promise<void>;
    clickOn(locateUsing: Locator | string): Promise<void>;   
    isLocatorVisible(locateUsing: Locator | string): Promise<void>;
    getLocator(selector: string): Locator;
    verifyCountOfLocatorMatches(
        locateUsing: Locator | string,
        expNumberOfCount: number,            
    ): Promise<void>;
}