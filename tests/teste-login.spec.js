import { test, expect } from '@playwright/test';

test.use({ project: 'chromium:saved-credentials' });

test('teste de login @hugao', async ({ page }) => {

    await page.goto('/');
  
    // Verificar que está na página da loja EBAC usando elemento visível
    await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
  
  });
  
test('teste de login 10 @hugao', async ({ page }) => {

    await page.goto('/');
  
    // Verificar que está na página da loja EBAC usando elemento visível
    await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
    await page.getByRole('link', { name: 'Comprar' }).click();
    await page.waitForTimeout(10000);
    
    await expect(page.getByRole('heading', { name: 'Produtos' })).toBeVisible();
});