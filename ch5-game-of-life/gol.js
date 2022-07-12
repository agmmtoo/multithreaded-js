class Grid {
	constructor(size, buffer, paint = () => {}) {
		const sizeSquared = size * size;
		this.buffer = buffer;
		this.size = size;
		this.cells = new Uint8Array(this.buffer, 0, sizeSquared);
		this.nextCells = new Uint8Array(this.buffer, sizeSquared, sizeSquared);
		this.paint = paint;
	}

	getCell(x, y) {
		const size = this.size;
		const sizeM1 = size - 1;
		x = x < 0 ? sizeM1 : x > sizeM1 ? 0 : x;
		y = y < 0 ? sizeM1 : y > sizeM1 ? 0 : y;
		return this.cells[size * x + y];
	}

