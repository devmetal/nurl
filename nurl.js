var request = require('request');
var Q       = require('Q');

/**
 * Nurl Logger Stream
 * It is a transformer stream
 * It will write log datas to the destination.
 * 
 * @param source
 * It is a readable
 *
 * @param dest
 * It is a writable
 * 
 */
function NurlLogger(source,dest) {

}

/**
 * NurlJson
 * Stream reader class
 */
function NurlJson() {

}

function makePromiseRequest(url,options) {
	options = options || {};
	options['url'] = url;

	var def = Q.defer();

	var cb = function(e,r,b) {
		if (!e) {
			def.resolve([b,r]);
		} else {
			def.reject(e);	
		}
	}

	request(options,cb);

	return def.promise;
}

function makeStreamRequest(url,options,writable) {

}

function Nurl(url, options) {
	this.url = url;
	this.options = options;
}

Nurl.prototype.request = function() {
	var self = this;
}

/**
 * Create a request stream with request package from npm
 * 
 * @param writable 
 * This is a Stream.Writable class. If we provide this
 * param, the request will be piped to this stream.
 */
Nurl.prototype.requestStream = function(writable) {
	var self = this;
}