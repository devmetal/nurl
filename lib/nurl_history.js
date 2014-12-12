var stream = require('stream');
var utils  = require('utils'); 
var Q      = require('Q');    

utils.inherits(NurlHistory,stream.Duplex);

function NurlHistory() {
	stream.Duplex.call(this);

	this.objectMode = true;
	this.buffer = [];
	this.bufferSize = 0;
}

NurlHistory.prototype._read = function(n) {

}

NurlHistory.prototype._write = function(obj,encoding,callback) {
	this.bufferSize = this.buffer.push(obj);
	return Q(this.bufferSize);
}

NurlHistory.prototype.done = function() {
	if (this.bufferSize > 0) {
		this.emit('readable');
	}
}

module.exports = NurlHistory;