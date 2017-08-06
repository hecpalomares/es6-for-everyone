(function arrowFunctionsExcercises () {
	//Get the an array of items
	const items = Array.from(document.querySelectorAll('[data-time]'));
	

	const filteredVideos = 
		//Filter only for a certain word
		items.filter(item => item.textContent.includes('Flexbox'))
		//Get the string of data-time
		.map(item => item.dataset.time)
		//convert data-time to a number, map the array to seconds
		.map(timeCode => {
			const parts = timeCode.split(':').map(part => parseFloat(part));
			return ((parts[0] * 60) + parts[1]);
		})
		//Get the total fo seconds of the video
		.reduce((runningTotal, seconds) => runningTotal + seconds, 0);

		console.log(filteredVideos);
	
}());