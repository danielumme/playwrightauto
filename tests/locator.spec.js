import {test, expect} from '@playwright/test';

test('Locator', async ({page})=>{
    await page.goto('https://www.demoblaze.com/index.html');
    await page.waitForTimeout(3000)
    await page.locator("//*[@id='login2']").click()
    await page.locator("#loginusername").fill("pavanol")
    await page.locator("#loginpassword").fill("test@123")
    await page.locator("//button[text()='Log in']").click()
    const logout = await page.locator("//a[text()='Log out']")
    await expect(logout).toBeVisible()
    await page.waitForTimeout(3000)

})