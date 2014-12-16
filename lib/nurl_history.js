var stream = require('stream');
var utils  = require('util');     
var assert = require('assert');

utils.inherits(HistoryStackStream,stream.Readable);

function HistoryStackStream(history) {
    stream.Readable.call(this,{
    	objectMode:true
    });

    this.history = history;
}

HistoryStackStream.prototype._read = function () {
    while (this.history.hasNext()) {
    	this.push(this.history.pop());
    }

    this.push(null);
};

var _storage = [];

function NurlHistory() {

    var self = this;

    this.push = function (elem) {
        return self._push(elem);
    };

    this.pop = function () {
        return self._pop();
    };

    this.hasNext = function() {
    	return !!_storage.length;
    };

    this.stream = function () {
        return new HistoryStackStream(self);
    };

    this._push = function (elem) {
    	var serialized = JSON.stringify(elem);
    	var buffer = new Buffer(serialized, 'utf8');
    	return _storage.push(buffer);
    };

    this._pop = function () {
    	var buffer = _storage.pop();
    	if (typeof buffer === 'undefined') {
    		return null;
    	}

    	return JSON.parse(buffer);
    };
};

module.exports = NurlHistory;