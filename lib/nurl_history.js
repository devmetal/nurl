var utils  = require('util');     
var assert = require('assert');
var es     = require('event-stream');

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
        return es.readable(function(count,cb){
        	return self.hasNext() ? cb(null,self.pop()) : this.emit('end');
        });
    };

    this._push = function(elem) {
    	return _storage.push(elem);
    };

    this._pop = function() {
    	var obj = _storage.pop();
    	if (typeof obj === 'undefined') {
    		return null;
    	} else {
    		return obj;
    	}
    };
};

module.exports = NurlHistory;