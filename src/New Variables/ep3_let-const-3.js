function realWorldLetConst () {
	
	//Scoped i variable per iteration (inside curly brackets)
	for(let i = 0; i < 10; i++) {
		setTimeout(function() {
			console.log(i);
		}, 1000);
	}
}

realWorldLetConst();