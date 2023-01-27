const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('https://www.imdb.com/chart/moviemeter/?ref_=nv_mv_mpm');
    
    const imgList = await page.evaluate(() => {
        const nodeList = document.querySelectorAll('tbody img')

        const imgArray = [...nodeList]

        const imgList = imgArray.map( ({src}) => ({
            src
        }))

       return imgList
    });

    fs.writeFile('filmes.json', JSON.stringify(imgList, null, 2), err => {
        if(err) throw new Error('alguma coisa deu errado')
        
        console.log('deu certo')
    })

    await browser.close();
  })();