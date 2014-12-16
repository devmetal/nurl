var assert = require('chai').assert;

suite('#Buffer',function() {
    test('writeUInt8',function(){
		var buffer = new Buffer(1024);
		buffer.write({'foo':'bar'});
		var obj = buffer.readUInt8(0);
		assert.isObject(obj);
		assert.equal(obj,{'foo':'bar'});
	});
});