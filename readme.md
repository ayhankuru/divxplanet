[![Travis Build Status](http://img.shields.io/travis/ayhankuru/divxplanet.svg?style=flat-square)](https://travis-ci.org/ayhankuru/divxplanet) [![Circle Build Status](https://img.shields.io/circleci/project/ayhankuru/divxplanet.svg?style=flat-square)](https://circleci.com/gh/ayhankuru/divxplanet) [![Appveyor Build Status](https://img.shields.io/appveyor/ci/ayhankuru/divxplanet.svg?style=flat-square)](https://ci.appveyor.com/project/ayhankuru/divxplanet) [![Build Status](https://img.shields.io/david/ayhankuru/divxplanet.svg?style=flat-square)](https://david-dm.org/ayhankuru/divxplanet) [![io.js supported](https://img.shields.io/badge/io.js-supported-green.svg?style=flat-square)](https://iojs.org)



Altyazı.org simple api

## Install

```
npm install divx
```

## Usage


```js
var divx = require('divx');

```

Example

```js
divx('Fight Club').then(function (data) {
	console.log(data);
}).catch(function(err) {
	console.log(err);
})

```

```json
{ "writers": [ { "name": "Chuck Palahniuk" }, { "name": "Jim Uhls" } ],
  "actor": 
   [ { "name": "Edward Norton" },
     { "name": "Brad Pitt" },
     { "name": "Helena Bonham Carter" },
     { "name": "Meat Loaf" },
     { "name": "Zach Grenier" },
     { "name": "Richmond Arquette" },
     { "name": "David Andrews" },
     { "name": "George Maguire" },
     { "name": "Eugenie Bondurant" },
     { "name": "Christina Cabot" },
     { "name": "Sydney \"Big Dawg\" Colston" },
     { "name": "Rachel Singer" },
     { "name": "Christie Cronenweth" },
     { "name": "Tim De Zarn" },
     { "name": "Ezra Buzzington" } ],
  "types": [ { "name": "Dram" }, { "name": "Gizem" }, { "name": "Gerilim" } ],
  "comment": 
   [ { "comment": "En sevdiğim filmler arasında ilk 5 tedir.Harika bir uyarlama senaryo." },
     { "comment": "şizofreniform filmlerin başlangıcı sayılır.ama hepsinden iyi kesinlikle." },
     { "comment": "uzun zamandir izlemek istedigim filmdi. tek kelimeyle super .bana kalirsa her dönem icin izlenilecek bir film.cok etkileyici.söylenecek yazilacak cok sey olabilir kesinlikle. ben sadece iste budur diyecegim.10/10" },
     { "comment": "dövüş kulübüne neden kadınlar alınmıyordu biliyor musunuz? çünkü birinci kural kulüp hakkında konuşmamaktı :D 8/10 " },
     { "comment": "Bugün 4. kez izlediğim şaheser. arada bir insanın aklına geliveriyor 5dk bakıp kapatayım derken film bitiyor ve Cast\"ı okurken buluyorsunuz kendinizi=)" },
     { "comment": "muhteşem bir oyunculuk ve hikaye sonu harkülade 9/10" },
     { "comment": "Bu filme yorum yapılmaz sadece izlenilir, çarpılırız mazallah :)" },
     { "comment": "3 kez izlediğim ve hala izleyeceğim bir şaheser gerek konusu gerek müzikleri olsun bir başyapıt " } ],
  "desc": "Geceleri uyuyamayan ve uç bir karaktere sahip biri ve kaygan sabunlar satıcısı bir adam, ilkel erkek saldırma içgüdüsünü şok edici yeni bir terapi şekline dönüştürürler. Yarattıkları konsept beğenilir, her şehirde yeraltı dövüş kulüpleri kurulur, ta ki duyarlı bir eksantrik bir kıvılcım çakana ve onları kontrolleri dışı gitgide derinlere inen bir yola sokana kadar.<br><br>\r\nBrad Pitt, Edward Norton ve Helena Bonham Carter bu sınır tanımayan hit filmde vurucu, uç performanslar sergiliyorlar!",
  "director": "David Fincher" }


```

