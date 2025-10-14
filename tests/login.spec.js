const { test, expect } = require('@playwright/test');

test('Verify login page title', async ({ page }) => {
    // Navigate to login page
    await page.goto('https://mylead-qa.heaptrace.com/#/login');
    const title = await page.title();
    console.log('Page Title:', title);
    await expect(page).toHaveTitle('MyLead');
});
