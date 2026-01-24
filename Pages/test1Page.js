const { test, expect } = require('@playwright/test');


const abrirSite = async (page) => {
    await page.goto('http://lojaebac.ebaconline.art.br');
};

const visualizarHome = async (page) => {
    // Verificar o nome da loja
    const nomeLoja = await page.getByRole('link', { name: 'EBAC – Shop' }).textContent();
    console.log('Nome da loja:', nomeLoja);
    await expect(page.getByRole('link', { name: 'EBAC – Shop' })).toBeVisible();
};

const clicarListaDeDesejos = async (page) => {
    
    await page.getByRole('link', { name: '0', exact: true }).click();
    await expect(page.getByRole('heading', { name: 'Lista de desejos' })).toBeVisible();

};

const clicarMinhaConta = async (page) => {
    await page.locator('#tbay-header').getByTitle('Login').click();
    await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
};



module.exports = { abrirSite, visualizarHome, clicarListaDeDesejos, clicarMinhaConta};