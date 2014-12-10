#!/usr/bin/env node

var comm   = require('commander');


comm.version('0.0.1')
	.option('-d, --doc', 'Read the documentation')
	.option('-db, --database', 'Read the database for requests');
	.option('-f, --flag <name>'. 'Read the database for requests');

comm.command('req <url>')
	.description('Create a request.')
	.option('-t, --contentType <type>', 'Request content type. Default application/json')
	.option('-m, --method <method>', 'Request method. Default GET')
	.option('-d, --data <data>', 'Request payload. Default empty')
	.option('-l, --log <file>', 'Set a file to log request')
	.action(function(url, options){
		console.log("Request command");
	});

comm.command('store <tag> [tags...]')
	.description('Storing the last request in the database with tag')
	.action(function(flag,otherFlags){
		console.log("Store command");
	});

comm.command('ui')
	.description('Open the web application.')
	.action(function(){
		
	});

comm.parse(process.argv);