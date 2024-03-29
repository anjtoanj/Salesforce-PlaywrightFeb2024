import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  reporter: 'html',
  timeout: 240000,
  workers: 4,
  retries: 0,
  
  use: {
      trace: 'on',
      video: 'on',
      screenshot: 'on',
      headless: false
  },
  projects: [
    {
      name: 'chrome',
      use: { 
        channel: 'chrome',
        baseURL: 'https://login.salesforce.com/',
        viewport:{
            width: 1720,
            height: 1280
        }},
    },

  ],

});
