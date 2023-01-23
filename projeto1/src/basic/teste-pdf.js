const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();
  await page.goto('http://pepsic.bvsalud.org/scielo.php?script=sci_arttext&pid=S0103-84862010000200013', {
    waitUntil: 'networkidle2',
  });
  await page.pdf({ path: 'jog.pdf', format: 'a4' });

  await browser.close();
})();