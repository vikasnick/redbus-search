import { test as base } from '@playwright/test';
import RedBus from '../pages/rebus.js';
import testData from '../testdata.json';

export const test = base.extend({
  redBus: async ({ page }, use) => {
    const redBus = new RedBus(page, testData.locators);
    await use(redBus);
  },
});
