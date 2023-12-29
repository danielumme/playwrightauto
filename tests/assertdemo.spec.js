const {test, expect} = require('@playwright/test')

test('Assertion Test', async ({page})=>{
    await page.goto("https://demo.nopcommerce.com/register")
    await expect(page).toHaveURL("https://demo.nopcommerce.com/register")
    await expect(page).toHaveTitle("nopCommerce demo store. Register")
    const logo = await page.getByAltText("nopCommerce demo store")
    await expect(logo).toBeVisible()
    const manradio = await page.locator("#gender-male")
    manradio.click()
    await expect(manradio).toBeChecked()

    await expect(await page.locator('.page-title h1')).toHaveText('Register')

    await expect(await page.locator('.page-title h1')).toContainText('Reg')
    
    await page.waitForTimeout(5000)
})


