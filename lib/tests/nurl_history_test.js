var NHistory = require('../nurl_history.js');
var assert   = require('chai').assert

suite('NurlHistory',function(){
	
	var history = new NHistory();

	setup(function(){
	});

	teardown(function(){
	});

	suite('#on',function(){
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

			history
				.write({'foo':'bar1'})
				.write({'foo':'bar2'})
				.write({'foo':'bar3'})
				.write();
		});
	});
});