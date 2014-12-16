var NurlHistory = require('./lib/nurl_history.js');

var history = new NurlHistory();

history.on('readable',function(){
	var datas = history.read();
	console.log("read");
	console.log(datas);
});

history
	.addToHistory({'foo':'bar'})
	.addToHistory({'foo':'bar'})
	.addToHistory(null);