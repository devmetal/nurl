#!/usr/bin/env node
var Q      = require('Q');
var comm   = require('commander');
var request = require('request');

comm.version('0.0.1')
	.option('-u, --url', 'Target URL to request.')
	.option('-m, --method', 'Request method.')
	.option('-d, --data', 'Request payload')
	.parse(process.argv);

function proxyRequest(url,options) {
	options = options || {};
	options['proxy'] = '*****';
	options['url'] = url;

	var def = Q.defer();

	request(options,function(error,response,body){
		if (!error) {
			def.resolve([body,response]);
		} else {
			def.reject(error);
		}
	});

	return def.promise;
}

proxyRequest('http://google.com')
	.spread(function(body,response){
		console.log(response.headers);
		console.log(body);
	})
	.catch(function(error){
		console.log(error);
	});