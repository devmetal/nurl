var stream = require('stream');
var utils  = require('util');     

utils.inherits(NurlHistory,stream.Readable);


function NurlHistory() {
	stream.Readable.call(this,{
		objectMode:true
	});

	this.buffer = [];
	this.bufferSize = 0;
}

NurlHistory.prototype._read = function(size) {
	console.log("inner read");
	this.push(this.buffer[0]);
}

NurlHistory.prototype.addToHistory = function(obj,encoding,callback) {
	var self = this;

	if (obj) {
		this.bufferSize++;
		this.buffer.push(obj);
	} else {
		console.log("readable");
		this.emit('readable');
	}

	if (callback) {
		callback();
	}

	return self;
}

module.exports = NurlHistory;