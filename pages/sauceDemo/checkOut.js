const { expect } = require('@playwright/test')

exports.checkOut = class checkOut {

  constructor(page) {
    this.page = page;
    this.firstNameTextbox = page.locator('[data-test="firstName"]');
    this.lastNameTextbox = page.locator('[data-test="lastName"]');
    this.postalCodeTextbox = page.locator('[data-test="postalCode"]');
    this.continueButton = page.locator('[data-test="continue"]');
    this.cancelCheckoutButton = page.locator('[data-test="cancel"]');
    this.cancelCheckoutOverviewButton = page.locator('[data-test="cancel"]');
    this.finishCheckoutButton = page.locator('[data-test="finish"]');
    this.checkoutCompleteMessage = page.locator('xpath=//span[text()="Checkout: Complete!"]');
    this.orderSuccessMessage = page.locator('xpath=//h2[@class="complete-header"]');
    this.bactToHomeButton = page.locator('[data-test="back-to-products"]');
  }

  async checkOutDetails(fName, lName, pCode) {

    if (typeof (pCode) == 'number') {

      pCode = pCode.toString();
    }
    await this.firstNameTextbox.fill(fName);
    await this.lastNameTextbox.fill(lName);
    await this.postalCodeTextbox.fill(pCode);
    await this.continueButton.click();
  }

  async cancelCheckout(products) {

    await this.cancelCheckoutButton.scrollIntoViewIfNeeded();
    await this.cancelCheckoutButton.click();
  }

  async finishCheckoutOverview() {

    await this.finishCheckoutButton.scrollIntoViewIfNeeded();
    await this.finishCheckoutButton.click();
  }

  async cancelCheckoutOverview() {

    await this.cancelCheckoutOverviewButton.scrollIntoViewIfNeeded();
    await this.cancelCheckoutOverviewButton.click();
  }

  async verifySuccessfullOrder() {

    await expect(this.checkoutCompleteMessage).toBeVisible();
    await expect(this.orderSuccessMessage).toBeVisible();
    await this.bactToHomeButton.click();
  }

}