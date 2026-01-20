import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/?zx=1768663139352&no_sw_cr=1');
  await page.getByRole('img', { name: 'Google' }).click();
 
});