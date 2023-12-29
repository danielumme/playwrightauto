import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  const email = [1, 2, 3]

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  console.log(email.map(x => x +1 ))
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Username').press('Tab');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  
  const name = await page.locator('.oxd-userdropdown-name').textContent()
  await page.getByRole('banner').getByText(name).click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
});