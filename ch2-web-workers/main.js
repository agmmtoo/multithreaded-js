console.log('hello from main.js');

const worker = new Worker('worker.js');

worker.onmessage = e => console.log('message received from worker', e.data);

worker.postMessage('message sent to worker');

console.log('bye from main.js');
