const puppeteer = require('puppeteer');
require('dotenv').config();

(async () => {
    //Carregamento da página de destino
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('https://www.facebook.com/');

    //Login
    await page.waitForSelector('input[name="email"]'); //espera o input de nome carregar
    await page.type('input[name="email"]', process.env.EMAIL, {delay:100});
    
    //Senha
    await page.type('input[name=pass]', process.env.PASS, {delay: 100});
    
    //Entrar
    await page.click('button[name=login]');
    await page.waitForNavigation();

    //Abrindo a caixa de postagem
    const element = await page.waitForSelector('div.x1i10hfl.x6umtig.x1b1mbwd.xaqea5y.xav7gou.x9f619.x1ypdohk.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.x16tdsg8.x1hl2dhg.xggy1nq.x87ps6o.x1lku1pv.x1a2a7pz.x6s0dn4.xmjcpbm.x107yiy2.xv8uw2v.x1tfwpuw.x2g32xy.x78zum5.x1q0g3np.x1iyjqo2.x1nhvcw1.x1n2onr6.xt7dq6l.x1ba4aug.x1y1aw1k.xn6708d.xwib8y2.x1ye3gou');
    await element.click();

    //Escrevendo o post
    const elementType = await page.waitForSelector('p.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.x16tdsg8');
    await elementType.type('Teste com Puppeteer!', {delay: 100});
    await page.click('div.x1n2onr6.x1ja2u2z.x78zum5.x2lah0s.xl56j7k.x6s0dn4.xozqiw3.x1q0g3np.xi112ho.x17zwfj4.x585lrc.x1403ito.x972fbf.xcfux6l.x1qhh985.xm0m39n.x9f619.xn6708d.x1ye3gou.xtvsq51.x1r1pt67');

    //Tirando print do post
    await page.screenshot({path: 'facebook.png'});

    //fechando página após operação
    await browser.close();
})()