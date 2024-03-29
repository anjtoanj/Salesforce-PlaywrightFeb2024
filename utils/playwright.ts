import { Page,Locator,test,expect  } from "@playwright/test";

export abstract class PLayWrightWrapper{

    readonly page: Page;
    constructor(page: Page){
        this.page = page;
    }

    async loadApp(url:string) {
       try { 
                await test.step(`The url ${url} loaded`, async()=>{
                    await this.page.goto(url,{timeout: 6000}) // increased timeout
                });
        } catch (error){
                console.error('Error loading the page:' ,error);
         } 
    }

    async type(locator: string, name: string, data: string){
        await test.step(`Textbox ${name} filled with data: ${data}`, async()=>{
            
            await this.page.locator(locator).clear;
            await this.page.locator(locator).fill(data);

        })
    }

    async click(locator: string, name: string){
        await test.step(`The locator ${name} is clicked`, async()=>{
            
            await this.page.locator(locator).click;

        })
    }

}