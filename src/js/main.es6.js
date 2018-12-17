/* ES6 goes here */

class Dog {
	
	constructor (name) {
		this.name = name;
	}

	sayHi() {
		return this.name + ' says woof!';
	}
}

let spark = new Dog('Spark')
console.log(spark.sayHi());