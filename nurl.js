var _request   = require('request');
var Q          = require('Q');
var stream     = require('stream');
var utils      = require('utils'); 
var JsonStream = require('JSONStream');

utils.inherits(NurlStream, stream.Transform);
utils.inherits(NurlHistory,stream.Duplex);

function NurlStream() {
	stream.Transform.call(this);

	this._meta    = null;
	this._request = null;
	this._headers = null;
	this._body    = null;
}

NurlStream.prototype._transform = function() {

}

function NurlHistory() {
	stream.Duplex.call(this);
}

NurlHistory.prototype._read = function() {

}

NurlHistory.prototype._write = function() {

}

function Nurl(url, options) {
	this.url = url;
	this.options = options || {};
	this.options['url'] = url;

	this.stream = new NurlStream();
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

var _history = new NurlHistory();

module.exports = {
	nurl:function(url,options) {
		var nurl = new Nurl(url,options);
		_history.write(nurl);
		return nurl.request();
	},
	history:function() {
		return _history; //TODO: Make a readable strem from _history
	}
}