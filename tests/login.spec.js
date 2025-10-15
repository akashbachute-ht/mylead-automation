const { test, expect } = require('@playwright/test');


test('Verify login page title 2', async ({ page }) => {
    // Navigate to login page
    await page.goto('https://mylead-qa.heaptrace.com/#/login');
    const title = await page.title();
    console.log('Page Title:', title);
    await expect(page).toHaveTitle('MyLead');
});
//selectors use


test('Login to the application', async ({ page }) => {
    // Navigate to login page
    await page.goto('https://mylead-qa.heaptrace.com/#/login');
    await page.locator('[placeholder="Email address"]').fill('qauat.ht@gmail.com');
    await page.locator('[placeholder="Password"]').fill('Test@123');
    await page.locator('button[type="submit"]').click();
});