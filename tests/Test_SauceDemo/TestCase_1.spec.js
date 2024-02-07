const { test, expect } = require('@playwright/test');
import ExcelJS from 'exceljs';
import path from 'path';
import { logActionsSauceLab } from '../../pages/sauceDemo/login-logout-page'
import { inventory } from '../../pages/sauceDemo/inventory'
import { AddCart } from '../../pages/sauceDemo/cart';
import { checkOut } from '../../pages/sauceDemo/checkOut';
const getRowValues = require('../../projectHelper/excelHelper');

test('sauceDemo work flow', async ({ page }) => {

  test.slow();

  const sheetName = 'sauceDemo';
  const rowIndex = 2; // Example row index
  const filePath = path.resolve(__dirname, '..', '..', 'testData', 'sauceDemo.xlsx'); // Provide the path to your Excel file

  // Get all column values for the specified row from Excel file
  const rowData = await getRowValues(sheetName, rowIndex, filePath);
  if (rowData) {

    console.log('Row data:', rowData);
  }
  else {

    console.error(`Row ${rowIndex} not found.`);
    test.fail();
  }


  //const testData = await getTestData('https://www.saucedemo.com/');

  const LoginAction = new logActionsSauceLab(page)
  const invAction = new inventory(page)
  const cartAction = new AddCart(page)
  const checkOutAction = new checkOut(page)

  await LoginAction.navigateToUrl(rowData['URL'])
  await LoginAction.login(rowData.Username, rowData.Password)
  await invAction.add_remove_Products(rowData.Add_product_Product_Page)
  await invAction.viewCart()
  await cartAction.backToShopping()
  await invAction.add_remove_Products(rowData.Remove_product_Product_Page)
  await invAction.viewCart()
  await invAction.add_remove_Products(rowData.Remove_product_Cart_Page)
  await cartAction.backToShopping()
  await invAction.add_remove_Products(rowData.Final_Add_product_Product_page)
  await invAction.viewCart()
  await cartAction.checkOut()
  await checkOutAction.cancelCheckout()
  await cartAction.checkOut()
  await checkOutAction.checkOutDetails(rowData.firstName, rowData.lastName, rowData.pinCode)
  await checkOutAction.cancelCheckoutOverview()
  await invAction.viewCart()
  await cartAction.checkOut()
  await checkOutAction.checkOutDetails(rowData.firstName, rowData.lastName, rowData.pinCode)
  await checkOutAction.finishCheckoutOverview()
  await checkOutAction.verifySuccessfullOrder()
  await LoginAction.logout()

})
