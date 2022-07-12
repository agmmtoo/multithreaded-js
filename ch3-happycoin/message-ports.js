const { Worker, isMainThread, parentPort } = require('worker_threads');

if (isMainThread) {
	const worker = new Worker(__filename);
	worker.on('message', msg => {
		console.log('worker.on\'message\' in MainThread', msg);
		worker.postMessage(msg+'\nworker.postMessage(msg)');
	});
} else {
	parentPort.on('message', msg => {
		console.log('We got a message from the main thread: ', msg, ' :before is msg');
	});
	parentPort.postMessage('Hello, World! to parent from worker via parentPort.postMessage in worker');
}
