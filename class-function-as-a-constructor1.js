// Creating first the class
function Person(name) {
	this.name = name;
}

// Second we instantiate the new object
var person = new Person('Cristina');
person.name;
console.log('Result:', person.name);