import { test, expect } from '@playwright/test'

test('Assertions Demo', async ({ page }) => {

  await page.goto('https://kitchen.applitools.com/')
  await page.pause()
  //await expect(page.getByRole('heading', { name: 'The Kitchen' })).
  await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveCount(1)

  if (await page.$('heading', { name: 'The Kitchen' })) {
    await page.locator('heading', { name: 'The Kitchen' }).click()
    await page.pause()
  }

  //Check element Visible/Hidden
  await expect(page.getByRole('heading', { name: 'The Kitchen' })).toBeVisible()
  //await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toBeHidden()

  //Check element  Enabled/Disabled
  await expect(page.getByRole('heading', { name: 'The Kitchen' })).toBeEnabled()
  //await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toBeDisabled()

  //Check element Text matches value or not
  await expect(page.locator('text=The Kitchen')).toHaveText('The Kitchen')
  await expect(page.locator('text=The Kitchen')).not.toHaveText('ABCD')

  //Assert Element attribute 
  //await expect(page.locator('selector')).toHaveAttribute('class', /.*value/)
  //await expect(page.locator).toHaveClass('selected row');

  //Screenshot Moment

  //Check Url of the page
  await expect(page).toHaveURL(/kitchen.applitools.com/);

  //Check Title of the page
  await expect(page).toHaveTitle(/.*Kitchen/);

  //Check Page matches screenshot Visual Validation
  //await expect(page).toHaveScreenshot();

  //Screenshot Moment | Outro

})