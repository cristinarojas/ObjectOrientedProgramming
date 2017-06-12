function Product(brand, size, weight, color) {
	this.brand = brand;
	this.size = size;
	this.weight = weight;
	this.color = 'blue';
}

// Adding extra properties outsise the class
Product.prototype.color;

// Instantiate an object
var product1 = new Product('GAP', 12, '13lb');

// Printing the new object
console.log(product1.brand, product1.size, product1.weight, product1.color);

// Printind the object prototype
console.log(Product.prototype);

