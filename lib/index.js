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
        return rp({uri : 'http://divxplanet.com/index.php?page=arama',
                   method : 'POST',form:{arama:JSON.parse(data).imdbID}})
    }).then(function(data){ 
        var $ = cheerio.load(data);
        var url =$('script').html().match(/".*?"/g)[0];
            url =url.replace('"','').replace('"','');

        return requ('http://divxplanet.com'+url)

    }).then(function(data){
        
        var  $ = cheerio.load(data,{decodeEntities:false});
        var body = $('span[itemprop=description]').html();  
        resolve(body);
        
    }).catch(function(err){
        reject(err)
    });
  });
}


module.exports = exports = divxquery;