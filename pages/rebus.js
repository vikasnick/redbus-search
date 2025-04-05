export default class RedBus {
    constructor(page, locators) {
      this.page = page;
      this.locators = locators;
    }
  
    async navigate(url) {
      await this.page.setExtraHTTPHeaders({
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/121 Safari/537.36',
      });
  
      try {
        await this.page.goto(url, { waitUntil: 'domcontentloaded' });
      } catch (error) {
        console.error('Navigation error:', error);
        throw error;
      }
    }
  
    async searchBus(values, dateText) {
      await this.page.locator(this.locators.source).fill(values.source);
      await this.page.locator(this.locators.destination).fill(values.destination);
  
      await this.page.waitForTimeout(1000); // Optional delay for autosuggestions
      await this.page.locator(this.locators.dateOpener).click();
  
      const dateLocator = this.locators.dateTemplate.replace('{{DATE}}', dateText);
      await this.page.locator(dateLocator).first().click();
  
      await this.page.locator(this.locators.searchButton).click();
    }
  
    async verify() {
      // Adjust selector based on search result content
      await this.page.waitForSelector('.travels, .bus-items, .search-info'); 
    }
  }
  