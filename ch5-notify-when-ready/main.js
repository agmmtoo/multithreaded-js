if (!crossOriginIsolated) throw new Error('Cannot use SharedArrayBuffer');

const buffer = new SharedArrayBuffer(4);
const view = new Int32Array(buffer);

const start = performance.now();

let count = 128;

for (let i = 0; i < 128; i++) {
	const worker = new Worker('worker.js');
	worker.postMessage({buffer, name: i});

	worker.onmessage = () => {
		console.log(`Ready; id=${i}, count=${--count}, time=${performance.now() - start}ms`);
		if (count === 0) Atomics.notify(view, 0);
}

}
