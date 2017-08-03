function arrowFunctions2() {

	const sport = 'Football';
	const teams = ['Real Madrid', 'Barcelona', 'PSG'];

	const generalTable = teams.map((team, i) => {
		return {name: team, sport, place: i + 1}
	});

	const countries = [ 
		{name: 'Mexico', continent: 'America'},
		{name: 'US', continent: 'America'},
		{name: 'Italy', continent: 'Europe'},
		{name: 'Spain', continent: 'Europe'},
		{name: 'Peru', continent: 'America'},
		{name: 'Japan', continent: 'Asia'}
	];

	const countriesFromAmerica = countries.filter(country => country.continent == 'America');
	
}

arrowFunctions2();