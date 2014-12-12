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
	
	var def = Q.defer();

	if (obj) {
		this.bufferSize = this.buffer.push(obj);
		return def.resolve().nodeify(callback);
	} else {
		if (this.bufferSize > 0) {
			while(this.bufferSize--) {
				this.push(this.buffer.pop());
			}
			return def.resolve().nodeify(callback);
		} else {
			this.emit('error', 'Buffer is empty!');
			return def.reject().nodeify(callback);
		}	
	}
}

module.exports = NurlHistory;