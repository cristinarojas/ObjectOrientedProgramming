
// Creating class and instantiate at same time
var person = new function() {
	this.setName = function(name) {
		this.name = name;
	}

	this.sayHi = function() {
		return "Hi, My name is " + this.name;
	}
}

person.setName('Cristina');
console.log(person.sayHi()); 