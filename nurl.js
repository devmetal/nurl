var _request   = require('request');
var Q          = require('Q');
var stream     = require('stream');
var utils      = require('utils'); 
var JsonStream = require('JSONStream');

function NurlStream() {

}

function Nurl(url, options) {
	this.url = url;
	this.options = options || {};
	this.options['url'] = url;
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

	_request(options,cb);

	return def.promise;
}