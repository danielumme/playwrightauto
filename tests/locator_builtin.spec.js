// import {test, expect} from '@playwright/test'
const {test, expect} = require('@playwright/test')

test('Locator Built in', async ({page})=>{
    
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await page.waitForTimeout(3000)

    // const logo = await page.getByAltText('company-branding')
    // await expect(logo).toBeVisible()

    // await page.getByPlaceholder('Username').fill("Admin")
    // await page.getByPlaceholder('Password').fill('admin123')
    // await page.waitForTimeout(3000)
    // await page.getByRole('button', { type : 'submit'}).click()

    // await expect(await page.getByText('madhu kumar')).toBeVisible()
    // console.log("this is verify ", await page.getByText('madhu kumar').textContent())

    await page.getByText('Forgot your password?').click()
    await page.waitForTimeout(3000)
})