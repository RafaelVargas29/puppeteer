const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('https://www.imdb.com/chart/moviemeter/?ref_=nv_mv_mpm');
    
    const movieList = await page.evaluate(() => {
        const nodeList = document.querySelectorAll('tbody img')

        const imgArray = [...nodeList]

        const nameList = imgArray.map( ({alt}) => ({
            alt
        }))

        /* const imgList = imgArray.map( ({src}) => ({
             src
        }))*/

       //return imgList
       return nameList
    });

    fs.writeFile('movies.json', JSON.stringify(movieList, null, 2), err => {
        if(err) throw new Error('alguma coisa deu errado')
        
        console.log('deu certo')
    })

    await browser.close();
  })();