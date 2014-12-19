var utils  = require('util');     
var assert = require('assert');
var fs = require('fs');

var stream = require('stream');
var es     = require('event-stream');
var split = require('split');

var _outputStream = fs.createWriteStream('history.data',{encoding:'utf-8'});
var _inputStream  = fs.createReadStream('history.data',{encoding:'utf-8'});

var objectStream = function() {
    
}

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

    };

    this._pop = function() {

    };
};

module.exports = NurlHistory;