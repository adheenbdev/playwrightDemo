import { test, expect } from '@playwright/test';

test('Selectors Demo', async ({ page }) => {

  await page.goto('https://www.saucedemo.com')
  //await page.pause()
  await page.locator('[data-test="username"]').fill('standard_user')
  await page.locator('[data-test="password"]').fill('secret_sauce')
  await page.locator('[data-test="login-button"]').click()
  await page.locator('//div[text()="Swag Labs"]').isVisible
  await page.locator('//div[text()="Swag Labs"]').isEnabled
  await page.locator('//button[@id="react-burger-menu-btn"]').click()
  await page.locator('#logout_sidebar_link').click()
  await page.pause()
})