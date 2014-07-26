var divx = require('./lib/index.js');

divx('V For Vendetta').then(function (data) {
	console.log(data);
}).catch(function(err) {
	console.log(err);
})