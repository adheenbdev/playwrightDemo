const { expect } = require('@playwright/test')

exports.AddCart = class AddCart {

  constructor(page) {
    this.page = page;
    this.continueShoppingButton = page.locator('[data-test="continue-shopping"]')
    this.checkoutButton = page.locator('[data-test="checkout"]')

  }

  async backToShopping() {

    await this.continueShoppingButton.click();

  }

  async checkOut() {

    await this.checkoutButton.click();
  }

}