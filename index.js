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

// example usage: import using optional arg
// const log = require('mynpm');
// log('Hello World', { loudness: 'shout' });