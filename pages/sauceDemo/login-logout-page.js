const { expect } = require('@playwright/test')

exports.logActionsSauceLab = class logActionsSauceLab {
  constructor(page) {
    this.page = page;
    this.sauceDemo_username = page.locator('[data-test="username"]');
    this.sauceDemo_password = page.locator('[data-test="password"]');
    this.sauceDemo_loginButton = page.locator('[data-test="login-button"]');
    this.sauceDemo_loginHeader = page.locator('xpath=//div[@class="login_logo"]');
    this.sauceDemo_siteHeader = page.locator('xpath=//div[@class="app_logo"]');
    this.sauceDemo_menuItem = page.getByRole('button', { name: 'Open Menu' });
    this.sauceDemo_logoutButton = page.getByRole('link', { name: 'Logout' });
  }

  async navigateToUrl(URL) {

    await this.page.goto(URL);
    await expect(this.sauceDemo_loginHeader).toHaveText(['Swag Labs']);
  }

  async login(username, password) {
    await this.sauceDemo_username.fill(username);
    await this.sauceDemo_password.fill(password);
    await this.sauceDemo_loginButton.click();
    await expect(this.sauceDemo_siteHeader).toHaveText(['Swag Labs']);
  }

  async logout() {
    await this.sauceDemo_menuItem.click();
    await this.sauceDemo_logoutButton.click();
  }
}
