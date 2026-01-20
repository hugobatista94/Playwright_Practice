// @ts-check
import { test, expect } from '@playwright/test';
import { before } from 'node:test';


  // test.use({ viewport: { width: 1600, height: 1200 } });

  // test.use({
  //   geolocation: { longitude: 41.890221, latitude: 12.492348 },
  //   permissions: ['geolocation'],
  // });

 test.beforeEach(async ({ page }) => {
  await page.goto('https://automationpratice.com.br/');
 });

test('Cadastro com Sucesso @login', async ({ page }) => {
  
  await page.getByRole('link', { name: ' Cadastro' }).click();
  await page.locator('#user').click();
  await page.locator('#user').fill('Hugo');
  await page.locator('#email').dblclick();
  await page.locator('#email').fill('Hugo@gmail.com');
  await page.locator('#password').dblclick();
  await page.locator('#password').fill('654321');
  await page.getByRole('button', { name: 'Cadastrar' }).click();
  await page.getByRole('heading', { name: 'Cadastro realizado!' }).click();
});



test('Login com sucesso', async ({ page }) => {

  // fazendo o scroll para o elemento e clicando nele
  // const button = await page.getByRole('button', { name: 'Send Mail' });
  // await button.scrollIntoViewIfNeeded();
  // await button.click();

  // aguardando o elemento e fazendo o scroll para ele
  const Text = await page.waitForSelector('text=NEWSLETTER');
 await Text.scrollIntoViewIfNeeded();


  await page.getByRole('link', { name: ' Login' }).click();
  await page.getByText('Home ElectronicsShop Shop').click();
  await page.locator('#user').click();
  await page.locator('#user').fill('teste@gmail.com');
  await page.screenshot({ path: 'screenshots/screenshot1.png' });
  await page.locator('#password').click();
  await page.locator('#password').fill('123456');
  await page.locator('#password').screenshot({ path: 'screenshots/elemento_password.png' });
  await page.screenshot({ path: 'screenshots/screenshot2.png' });
  await page.getByRole('button', { name: 'login' }).click();
  await page.getByRole('heading', { name: 'Login realizado' }).click();
});

test.afterEach(async ({ page }, testInfo) => {
  // Tira screenshot se o teste falhar
  if (testInfo.status === 'failed') {
    await page.screenshot({ path: `screenshots/failed-${testInfo.title}.png` });
  }
});


