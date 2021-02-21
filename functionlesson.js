function storeUsername(username) {
	sessionStorage.setItem('username', username);

	console.log(username); //works - local scope
}

function getUsername() {
	return sessionStorage.getItem('username');
}

const myUsername = 'mprias';

storeUsername(myUsername);

getUsername();

//Access the name variable
const name = 'Melanie Prias';

function storeNameFromParentScope() {
	sessionStorage.setItem('name', name);
}

// ----- Try it yourself ----- //

// getting planet
const planet = {
	name: 'Neptune',
	color: 'Blue',
	shape: 'Sphere',
	numberOfOrder: 7,
	owner: 'Zeus',
	ring: false
};

// local approach - pure functions
function getColorShape(color, shape) {
	return color + ' ' + shape;
}

function getring(ring) {
	return ring;
}

getName();
getColorShape();

//global approach - nonpure functions
function getName() {
	return planet.name;
}

function getColorShape() {
	return planet.color + " that's " + planet.shape;
}

//method
