// Constructor notation
var hotel = new Object();

// Assign the properties and methods to the object
hotel.name = 'Cristina hotel',
hotel.rooms = 20,
hotel.reservations = 15,

hotel.availability = function() {
	return this.rooms - this.reservations;
}

// Printing
console.log(hotel.availability());