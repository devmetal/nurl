var NHistory = require('../nurl_history.js');
var assert   = require('chai').assert

suite('NurlHistory',function(){
	
	var history;

	setup(function(){
		history	= new NHistory();
	});

	teardown(function(){
		history	= null;
	});

	test('push pop',function(){
		history.push({'foo1':'bar1'});
		history.push({'foo2':'bar2'});
		history.push({'foo3':'bar3'});

		var foo3 = history.pop();
		var foo2 = history.pop();
		var foo1 = history.pop();

		assert.deepEqual(foo3,{'foo3':'bar3'});
		assert.deepEqual(foo2,{'foo2':'bar2'});
		assert.deepEqual(foo1,{'foo1':'bar1'});
	});

	test('stream',function(done){
		history.push({'foo1':'bar1'});
		history.push({'foo2':'bar2'});
		history.push({'foo3':'bar3'});

		var datas = [];

		history.stream()
			.on('data',function(obj){
				datas.push(obj);
			})
			.on('end',function(){
				assert.deepEqual(datas[0],{'foo3':'bar3'});
				assert.deepEqual(datas[1],{'foo2':'bar2'});
				assert.deepEqual(datas[2],{'foo1':'bar1'});
				done();
			});		
	});
});