const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.leagueoflegends.com/pt-br/');
  await page.screenshot({ path: 'lol.png' });

  await browser.close();
})();