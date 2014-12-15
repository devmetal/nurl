var stream = require('stream');
var utils  = require('utils');     
var Q = require('Q'); 

function HistoryStackStream(buffer) {
    stream.Readable.call(this,{
        objectMode:true
    });

    this.buffer = buffer;
}

utils.inherits(HistoryStackStream,stream.Readable);

HistoryStackStream.prototype._read = function () {
    while ((elem = this.buffer.pop()) != null) {
        this.push(elem);
    }
    this.push(null);
};

function NurlHistory() {

    this._buffer = [];

    var self = this;

    this.push = function (elem) {
        return self._push(elem);
    };

    this.pop = function () {
        return self._pop();
    };

    this.stream = function () {
        return new HistoryStackStream(this._buffer);
    };

    this._push = function (elem) {
        return this._buffer.push(elem);
    };

    this._pop = function () {
        return this._buffer.pop();
    }; 
};