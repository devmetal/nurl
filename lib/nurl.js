var _request   = require('request');
var Q          = require('Q');
var NHistory   = require('./nurl_history.js');
var NStream    = require('./nurl_stream.js');


function Nurl(url, options) {
	this.url = url;
	this.options = options || {};
	this.options['url'] = url;

	this.stream = new NStream();
}

Nurl.prototype.request = function() {
	var self = this;

	var def = Q.defer();

	var cb = function(e,r,b) {
		if (!e) {
			def.resolve([b,r]);
		} else {
			def.reject(e);	
		}
	}

	_request(options,cb)
		.pipe(self.stream);

	return def.promise;
}

var _history = new NHistory();

module.exports = {
	nurl:function(url,options) {
		var nurl = new Nurl(url,options);
		_history.write(nurl);
		return nurl.request();
	},
	history:function() {
		return _history;
	}
}