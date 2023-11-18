/**
 * Car class
 * @constructor
 * @param {String} model
 */

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()

class Car {
	constructor(model) {
		this.currentSpeed = 0;
		this.model = model;
	}

	accelerate() {
		this.currentSpeed++;
	}
	brake() {
		this.currentSpeed--;
	}

	toString() {
		return `${this.model} has a current speed of ${this.currentSpeed}mph.`;
	}
}
const qashQai = new Car("Qashqai");
qashQai.accelerate();
qashQai.accelerate();
qashQai.brake();
console.log(qashQai.toString());

/**
 * ElectricCar class
 * @constructor
 * @param {String} model
 */

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()

class ElectricCar extends Car {
	constructor(model) {
		super(model);
		this.motor = "electric";
	}

	// accelerate method that calls the inherited class accelerate
	// method twice every time it is run 
	accelerate() {
		super.accelerate();
		super.accelerate();
	}

	toString() {
		return `Electric ${super.toString()}`;
	}
}

const leaf = new ElectricCar("leaf");
leaf.accelerate();
leaf.accelerate();
leaf.brake();
console.log(leaf.toString());