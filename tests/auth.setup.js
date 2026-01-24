// @ts-check

import { test as setup } from "@playwright/test";

import fs from "fs";

const TOKEN_FILEPATH = "playwright/.auth/user.json";

// Garantir que o diretório existe
const authDir = "playwright/.auth";
if (!fs.existsSync(authDir)) {
  fs.mkdirSync(authDir, { recursive: true });
}

setup('authenticate', async ({ page }) => {
  await page.goto('http://lojaebac.ebaconline.art.br');
  await page.locator('#tbay-header').getByTitle('Login').click();
  await page.getByRole('textbox', { name: 'Username or email address *' }).click();
  await page.getByRole('textbox', { name: 'Username or email address *' }).fill('94hugobatista@gmail.com');
  await page.locator('#password').click();
  await page.locator('#password').fill('12345678');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByText('94hugobatista').nth(1).click();
  
  // Salvar o estado de autenticação
  await page.context().storageState({ path: TOKEN_FILEPATH });
});