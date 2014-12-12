var stream     = require('stream');
var utils      = require('utils'); 
var JsonStream = require('JSONStream');

utils.inherits(NurlStream, stream.Transform);

function NurlStream() {
	stream.Transform.call(this);

	this._meta    = null;
	this._request = null;
	this._headers = null;
	this._body    = null;
}

NurlStream.prototype._transform = function() {

}

module.NurlStream = NurlStream;