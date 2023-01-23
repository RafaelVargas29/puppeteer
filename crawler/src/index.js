const Crawler = require('crawler');

//instanciando o crawler
const raspar = new Crawler({
    //função de callback que retorna um erro caso a resposta não venha
    callback: function(error, res, done){
        if(error){
            console.log(error);
        }else{
            const $ = res.$;
            
            //titulo puro
            //console.log($('#main > div > span > div > div > div.lister > table > tbody > tr > td.titleColumn > a').text());
            
            //titulo e complementos (essa é a linha que eu devo explorar pois é mais simples de trabalhar os dados)
            console.log($('#main > div > span > div > div > div.lister > table > tbody > tr > td.titleColumn').text());
            
            //avaliação dos filmes
            //console.log($('#main > div > span > div > div > div.lister > table > tbody > tr > td.ratingColumn.imdbRating').text());
        }
        done(); //indica que só seguirá para a próxima instrução quando o callback for finalizado
    }
});

//fila de url's que serão utilizadas, com callback por padrão
raspar.queue('https://www.imdb.com/chart/moviemeter/?ref_=nv_mv_mpm');