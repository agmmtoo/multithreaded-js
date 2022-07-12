console.log('hello from worker');

self.onmessage = e => {
	console.log('message received from main.js', e.data);

	postMessage('message sent from worker');
}
