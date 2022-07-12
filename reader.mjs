import fs from 'fs/promises';

async function getNum(filename) {
	return parseInt(await fs.readFile(filename, 'utf8'), 10);
}

try {
	const numberPromises = [1,2,3].map(i => getNum(`${i}.txt`));
	const numbers = await Promise.all(numberPromises);
	console.log(numbers.reduce((prev, cur) => prev + cur, 0));
} catch (err) {
	console.error('Something went wrong:');
	console.error(err);
}
