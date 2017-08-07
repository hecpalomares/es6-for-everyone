(function templateStrings () {
	const me = {
		name: 'Hector',
		job: 'Software Engineer',
		age: 25,
		drink: 'Tea'
	}

	const dogs = [
		{ name: 'Ignaxio', age: 7},
		{ name: 'Thor', age: 4},
		{ name: 'Buck', age: 2}
	];

	const movie = {
		name: 'Dunkirk',
		director: 'Nolan',
		year: 2016
	};

	const beer = {
		name: 'XX Lager',
		brewery: 'Moctezuma',
		tags: ['Pale', 'Mexico', 'Lager']
	}

	function renderKeywords(keywords) {
		return `
			<ul>
				${keywords.map(keyword => `<li>${keyword}</li>`).join('')}
			</ul>
		`;
	}

	const markupMe = `
		<div class="person">
			<h2>Hello I´m ${me.age} and my name is ${me.name}</h2>
		</div>
		<div class="external-data">
			<h4>I work as a ${me.job}</h4>
			<h4>My favorite drink is ${me.drink}</h4>
		</div>
	`;

	const markupDogs = `
		<ul class="dogs">
			${dogs.map(dog => `<li>${dog.name} is ${dog.age * 7}</li>`).join('')}
		</ul>
	`;

	const markupMovies = `
		<div class="movies">
			${movie.year >= 2017 ? `In the current year ${new Date().getFullYear()}` : 
			`At the year ${movie.year}`}
			<p>${movie.name} is directed by ${movie.director}</p>
		</div>
	`;

	const markupBeer = `
		<div class="beer">
			<p>${beer.name} made by ${beer.brewery}</p>
			<p>Tags: ${renderKeywords(beer.tags)}</p>
		</div>
	`;

	document.body.innerHTML = markupBeer;

}());