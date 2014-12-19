var es = require('event-stream');

function DuplexStorage(readable,writable) {

	var through = es.through(
		function write(data) {
			
		},
		function end() {
			this.emit('end');
		}
	);

	this.push = function(obj) {

	};

	this.pop = function() {

	};

}