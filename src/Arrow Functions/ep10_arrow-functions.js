(function whenNotToUseArrowFunctions () {
	
	//When you need method bind to an object
	const person = {
		points: 1,
		score() {
			this.points++;
		}
	};

	console.log(person.points);

	person.score();
	person.score();

	console.log(person.points);

	//When you need to add a protoype method
	class Videogame {
		constructor (name, rating) {
			this.name = name;
			this.rating = rating;
		}
	}

	const darkestDungeon = new Videogame('Darkest Dungeon', 8.5);
	const fasterThanLight = new Videogame('Faster Than Light', 9.5);

	Videogame.prototype.score = function (rater) {
		return `${rater} gived to ${this.name} the rating of ${this.rating}`
	}

	console.log(darkestDungeon.score('Xbox Galaxy'));
	console.log(fasterThanLight.score('Nintendo World'));

	//When you need use arguments objets
	const orderBooks = function(){
		const books = Array.from(arguments);
		return books.map((book, i) => {
			return `${book} is #${i + 1}`;
		})
	}

	console.log(orderBooks('Catcher in the Rye', 'Sapiens', 'Shoe Dog'));

}());