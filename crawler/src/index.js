const Crawler = require('crawler');

//instanciando o crawler
const raspar = new Crawler({
    //função de callback que retorna um erro caso a resposta não venha
    callback: function(error, res, done){
        if(error){
            console.log(error);
        }else{
            const $ = res.$;
            
            const a = $('#main > div > span > div > div > div.lister > table > tbody > tr > td.titleColumn').text();
            const b =  a.replaceAll('\(', '')
                        .replaceAll('\)', '')
                        .replaceAll('1', '')
                        .replaceAll('2', '')
                        .replaceAll('3', '')
                        .replaceAll('4', '')
                        .replaceAll('5', '')
                        .replaceAll('6', '')
                        .replaceAll('7', '')
                        .replaceAll('8', '')
                        .replaceAll('9', '')
                        .replaceAll('0', '')
            
            console.log(b)
        }
        done(); //indica que só seguirá para a próxima instrução quando o callback for finalizado
    }
});

//fila de url's que serão utilizadas, com callback por padrão
raspar.queue('https://www.imdb.com/chart/moviemeter/?ref_=nv_mv_mpm');