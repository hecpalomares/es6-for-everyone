function constAndLets() {
	const person = {
		name: 'Hector',
		age: 25
	};

	console.log('Hector = ', person.name);
	person.name = 'Gerardo';
	console.log('Gerardo = ', person.name);

	//Freezed object
	const freezedMe = Object.freeze(person);
	freezedMe.name = 'Mike';
	console.log('Mike != ', freezedMe.name);
}

constAndLets();