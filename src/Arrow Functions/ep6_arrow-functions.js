function arrowFunctions () {
	const dogs = ['Buck', 'Spitz', 'Dave'];

	const fullDogs = dogs.map(function(name){
		return `${name} Husky`;
	});

	//Replace function word with fat arrow ( => )
	const fullDogs2 = dogs.map((name) => {
		return `${name} Husky`;
	});

	/*When there is only one parameter you can omit
	*the second parenthesis
	*/ 
	const fullDogs3 = dogs.map(name => {
		return `${name} Husky`;
	});

	//Implict return, all fits in one line. Removes curlys brackets
	const fullDogs4 = dogs.map(name => `${name} Husky`);
}

arrowFunctions();