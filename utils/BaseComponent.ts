import { Page,Locator,test,expect  } from "@playwright/test";
import { IComponentActions } from "./IComponentActions";
import exp from "constants";

export abstract class BaseComponent implements IComponentActions{

    static DefaultLocatorActionTimeout = 5000;
    static DefaultLocatorVerificationTimeout =8000;

    readonly page: Page;
    constructor(page: Page){
        this.page = page;
    }

    protected generateLocator(locateUsing: string | Locator): Locator{
        console.log(
            `INFO: Generating locator if string is given otherwise return the locator instance`,
        );
        return typeof locateUsing === 'string' ? this.getLocator(locateUsing): locateUsing;
    }

    getLocator(selector: string):Locator{
       console.log(`INFO: Constructing the locator based on given selector ${selector}`);
       return this.page.locator(selector);       
    }
      /**
     * options?.stepStatement ?? "" => this is null coleascing operator ,
     * if the stepstatment is null or undefined, then the default value which is "" will be printed
     * otherwise whatever its given will get printed
     */
    async fillIn(
        locateUsing: Locator | string,
        textToEnter: string,
        options?:{
            thresholdTimeout?: number;
            stepStatement?: string;
        },
    ): Promise<void> {
        await test.step(`Filling in ${textToEnter}: ${options?.stepStatement ?? ''}`,async ()=>{
            await this.generateLocator(locateUsing).fill(textToEnter,{
                timeout: options?.thresholdTimeout ?? BaseComponent.DefaultLocatorActionTimeout,
            });
        });        
    }

    async clickOn(
        locateUsing: string | Locator,
        options?:{
            thresholdTimeout?: number;
            stepStatment?: string;
        },
    ): Promise<void> {
        await test.step(`Attempting to click: ${options?.stepStatment ?? ''}` ,async ()=>{
            await this.generateLocator(locateUsing).click({
                timeout: options?.thresholdTimeout ?? BaseComponent.DefaultLocatorActionTimeout,
            });
        });
    }

    async isLocatorVisible(
        locateUsing: string | Locator,
        options?:{
            thresholdTimeout?: number |undefined;
            assertionStatement?: string;
        },
    ) : Promise<void> {
        await test.step(`Verifying locator visibility: ${
            options?.assertionStatement ?? ''
        }`, async ()=>{
          await expect(this.generateLocator(locateUsing), options?.assertionStatement).toBeVisible({
            timeout: options?.thresholdTimeout ?? BaseComponent.DefaultLocatorActionTimeout,
          });
        })        
    }

    public async verifyCountOfLocatorMatches(
        locateUsing: string | Locator, 
        expNumberOfCount: number,
        options?:{
            thresholdTimeout?: number;
            assertionStatement?: string;
        },
    ) {
        const eleLocator = this.generateLocator(locateUsing);
        await test.step(`Verify the count of locator matches: ${expNumberOfCount}`, async ()=>{
                await expect(eleLocator,`${options?.assertionStatement ?? ''}`).toHaveCount(
                    expNumberOfCount,                        
            );
        });
    }

    public async verifyPageHasNavigatedTo(
        url: string,
        options?: {
            thresholdTimeout?: number;
            assertionStatement?: string;
        },
    ) {
        await test.step(`Verifying page navigation to ${url}`, async ()=>{
            await expect // adding polling loop to retry
                .poll(
                    ()=>{
                        const pageUrl = this.page.url();
                        return pageUrl;
                    },
                    {
                        timeout: options?.thresholdTimeout ?? BaseComponent.DefaultLocatorVerificationTimeout,
                        message: options?.assertionStatement ?? 'Polling to verify page navigation',
                    },
                )
                .toContain(url);
        });        
      }

}