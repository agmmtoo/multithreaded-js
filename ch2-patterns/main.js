const worker = new RpcWorker('worker.js');

Promise.allSettled([
	worker.exec('square_sum', 1_000_000),
	worker.exec('fibonacci', 1_000),
	worker.exec('fake_method'),
	worker.exec('bad'),
]).then(([square_num, fibonacce, fake, bad]) => {
	console.log('square num', square_num);
	console.log('fibonacci', fibonacce);
	console.log('fake', fake);
	console.log('bad', bad);
});
