var divx = require('./lib/index.js');

divx('Fight Club').then(function (data) {
	console.log(data);
}).catch(function(err) {
	console.log(err);
})