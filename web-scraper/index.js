const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.imdb.com/chart/moviemeter/?ref_=nv_mv_mpm');
    
    const movieList = await page.evaluate(() => {
        //capturando os elementos do seletor escolhido
        const nodeList = document.querySelectorAll('tbody img')

        //espalhando os elementos do nodelist em um array de elementos
        const imgArray = [...nodeList]

        //pegando um atributo do elemento escolhido (alt: nome do filme)
        const nameList = imgArray.map( ({alt}) => ({
            alt
        }))

        /* const imgList = imgArray.map( ({src}) => ({
             src
        }))*/

         /* const imgList = imgArray.map( ({title}) => ({
             title
        }))*/

       //return imgList
       return nameList
    });

    //guardando os atibutos coletados em um arquivo .json
    fs.writeFile('movies.json', JSON.stringify(movieList, null, 2), err => {
        if(err) throw new Error('alguma coisa deu errado')
        
        console.log('deu certo')
    })

    await browser.close();
  })();