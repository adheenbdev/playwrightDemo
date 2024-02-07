const { expect } = require('@playwright/test')

exports.inventory = class inventory {

  constructor(page) {
    this.page = page;
    this.viewCartButton = page.locator('xpath=//a[@class="shopping_cart_link"]');

  }

  async add_remove_Products(products) {

    let pdtList = products.split(',');

    for (var i = 0; i < pdtList.length; i++) {

      await this.page.locator('xpath=//div[text()="' + pdtList[i] + '"]//following::button[1]').click();
    }
  }

  async viewCart() {

    await this.viewCartButton.click();

  }

}