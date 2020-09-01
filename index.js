function log(msg) {
	console.log(msg);
};

function shout(msg) {
	if (typeof msg === str) {
		console.log(msg.toUpperCase())
	} else {
		log(msg)
	};
};

function whisper(msg) {
	if (typeof msg === str) {
		console.log(msg.toLowerCase())
	} else {
		log(msg)
	};
};

module.exports = {log, shout, whisper}

// later, import the functions using destructuring
// const { log, shout, whisper } = require('mynpm');




function log(msg, options = { loudness: 'default' }) {
	if (options && options.loudness) {
		switch (options.loudness) {
			case 'shout':
				if (typeof msg === str) console.log(msg.toUpperCase());
				break;
			case 'whisper':
				if (typeof msg === str) console.log(msg.toLowerCase());
				break;
			default:
				console.log(msg);
		}
	}
}; module.exports = log;

// user will import using optional arg
const log = require('my-module-name');
log('Hello World', { loudness: 'shout' });