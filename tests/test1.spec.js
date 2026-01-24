const { test, expect } = require('@playwright/test');
const { abrirSite, visualizarHome, clicarListaDeDesejos , clicarMinhaConta } = require('../Pages/test1Page.js');


test('Verificar navegação', async ({ page }) => {
  await abrirSite(page);
  await visualizarHome(page);
  await clicarListaDeDesejos(page);
 
});

