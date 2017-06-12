function Person(name, age, address, birth) {
	// Properties
	this.name = name;
	this.age = age;
	this.address = address;
	this.birth = birth;
}

// Instantiate an object
var person1 = new Person('Cristina', 28, 'LA, Ca', '20/January/1989');

console.log(person1.name, person1.age, person1.address, person1.birth);

