const firstRequest = new XMLHttpRequest();
const mainUrl = "https://swapi.dev/api/planets";

firstRequest.addEventListener("load", function() {
	console.log("It worked");
	const data = JSON.parse(this.responseText);
	data["results"].forEach(planet => {
		console.log(planet.name)
	})

	const filmUrl = data.results[0].films[0];
	const filmRequest = new XMLHttpRequest();

	filmRequest.addEventListener("load", function() {
		console.log("Request for the film working");
		const filmData = JSON.parse(this.responseText);
		console.log(filmData);
	})

	filmRequest.addEventListener("error", function(e) {
		console.log("Film request failed", e);
	})

	filmRequest.open("get", filmUrl);
	filmRequest.send();
})

firstRequest.addEventListener("error", function() {
	console.log("Failed to get the server");
})


firstRequest.open("GET", mainUrl);
firstRequest.send();
console.log("Request Sent");
































// const firstReq = new XMLHttpRequest();
// firstReq.addEventListener('load', function() {
// 	console.log('IT WORKED!!!');
// 	const data = JSON.parse(this.responseText);
// 	for (let planet of data.results) {
// 		console.log(planet.name);
// 	}
// });
// firstReq.addEventListener('error', () => {
// 	console.log('ERROR!!!!!!');
// });
// firstReq.open('GET', 'https://swapi.co/api/planets/');
// firstReq.send();
// console.log('Request Sent!');
