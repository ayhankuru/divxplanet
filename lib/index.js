var http = require('http'),
    iconv = require('iconv-lite'),   
    Promise = require("bluebird"),
    rp = require('request-promise'),
    cheerio = require('cheerio');
    
    
var requ =function (url) {
    return new Promise(function (resolve, reject) {

        http.get(url, function(res) {
              var chunks = [];
              res.on('data', function(chunk) {
                chunks.push(chunk);
              });
              res.on('end', function() {
                var decodedBody = iconv.decode(Buffer.concat(chunks), 'iso-8859-9');
                resolve(decodedBody)
              });
            });

    });
}

 

 

var divxquery =function(name){
  return new Promise(function (resolve, reject) {
    rp('http://www.omdbapi.com/?t='+name)
    .then(function(data){ 
        return rp({uri : 'http://altyazi.org/index.php?page=arama',
                   method : 'POST',form:{arama:JSON.parse(data).imdbID}})
    }).then(function(data){ 
        var $ = cheerio.load(data);
        var url =$('script').html().match(/".*?"/g)[0];
            url =url.replace('"','').replace('"','');

        return requ('http://altyazi.org'+url)

    }).then(function(data){

      var chunk={};
      var  $ = cheerio.load(data,{decodeEntities:false});
      var $sub = cheerio.load(data,{decodeEntities:false});
      var body = $('span[itemprop=description]').html();
      var director =$('div[itemprop=director]').children().text();  



      chunk.writers =[];
      chunk.actor=[];
      chunk.types=[];
      chunk.comment=[];

      $('div[itemprop=author]').each(function(i, elem) {
        chunk.writers[i] = {name:$(this).text()};
      });

      $('div[itemprop=actor]').each(function(i, elem) {
        chunk.actor[i] = {name:$(this).text()};
      });

      $('span[itemprop=genre]').each(function(i, elem) {
        chunk.types[i] = {name:$(this).text()};
      });

      var comments =$('#commentList').html();

      var $$ = cheerio.load(comments,{decodeEntities:false});

      $$('.commentbox').each(function(i, elem) {
        chunk.comment[i] ={comment: $(this).text()};
      });

      chunk.desc=body;
      chunk.director=director;


      resolve(chunk);
        
    }).catch(function(err){
        reject(err)
    });
  });
}


module.exports = exports = divxquery;