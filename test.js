const {
	Worker,
	isMainThread,
	workerData
} = require('worker_threads');
const assert = require('assert');

if (isMainThread) {
	const worker = new Worker(__filename, { workerData: { num: 42 } });
	console.log('pid: ', process.pid, '\nppid: ', process.ppid);
} else {
	assert.strictEqual(workerData.num, 42);
	console.log('ppid: ', process.ppid, 'i\npid: ', process.pid);
}
