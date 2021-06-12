// ----- Try it yourself ----- //
let x = 5;
let y = 4;

// Anonymous function
const getMultiply = function(x, y) {
	return x * y;
}

const getDivide = function(x, y) {
	return x / y;
}

getMultiply();
getDivide();

// --- Other Scenario --- //
const dayinfo = {
	day: 'Thursday',
	specific: 'Afternoon',
	start: 5,
	end: 7,
	virtual: true
}

// Named Function
function schedule(day, specific) {
	return day + " " + specific + ': ' + ' HITT Program';
}



// Method
function time() {
	return this.day + " " + this.specific;
}
