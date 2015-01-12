var divx = require('./lib/index.js');
var expect = require('expect.js');

describe('Altyazı.org Testler ', function () {

	it('Fight Club Test', function (done) {

			divx('Fight Club').then(function (data) {	
					expect(data).to.be.an('object');
					expect(data.director).to.eql("David Fincher");
					expect(data.writers.length).to.eql(2);
					expect(data.types.length).to.eql(3);
					expect(data.comment[0].comment).to.eql("En sevdiğim filmler arasında ilk 5 tedir.Harika bir uyarlama senaryo.");
					done();
			},function (err) {
					expect(err).to.exist;
					done();
			}); 
	});
	
});