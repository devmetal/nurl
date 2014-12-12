var NHistory = require('../nurl_history.js');
var assert   = require('chai').assert

suite('NurlHistory',function(){
	
	var history = new NHistory();

	setup(function(){
	});

	teardown(function(){
	});

	suite('#on',function(){
		test('data',function(){

			history.on('data',function(data){
				assert.equal(data,{'foo':'bar'});
				done();
			});

			history.write({'foo':'bar'})
				.then(function(){
					history.done();
				});
		});

		test('readable -> read(3)',function(){
			
			history.on('readable',function(){
				var datas = history.read(3);
				assert.isArray(datas);
				assert.lengthOf(datas,3);
				assert.equal(data[0],{'foo':'bar3'});
				assert.equal(data[1],{'foo':'bar2'});
				assert.equal(data[2],{'foo':'bar1'});
				done();
			});

			history.write({'foo':'bar1'})
				.then(function(){return history.write({'foo':'bar2'})})
				.then(function(){return history.write({'foo':'bar3'})})
				.then(function(){
					history.done()
				});
		});
	});
});