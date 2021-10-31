const url = "https://swapi.dev/api";

const checkStatusAndParse = (res) => { 
    if (!res.ok) throw new Error(`Status Code Error: ${res.status}`);

    return res.json();
}


const printPlanets = (data) => { 
    for(let planet of data.results) { 
        console.log(planet.name) 
    } 
    console.log("\n")
    
    return Promise.resolve(data.next);
}

const fetchNext = (url) => {
    return fetch(url);
}

//---------Get data from the starwars API main point----------

fetch(url)
        .then( res => {
            return res.json()
        })
        .then( data => {
            const filmUrl = data.films;
            const peopleUrl = data.people;
            const planetsUrl = data.planets;
            const speciesUrl = data.species;
            const starshipsUrl = data.starships;
            const vehiclesUrl = data.vehicles;

            //printing planets

            fetch(planetsUrl) 
                            .then(checkStatusAndParse)
                            .then(printPlanets)
                            .then(fetchNext)
                            .then(checkStatusAndParse)
                            .then(printPlanets)
                            .then(fetchNext)
                            .then(checkStatusAndParse)
                            .then(printPlanets)


            
            //printing the films
            fetch(filmUrl)
                        .then(res => {
                            if (!res.ok) throw new Error(`Status Code Error: ${res.status}`)
                            return res.json()                         
                        })
                        .then( films => { 
                            let count = 1;
                            for (let film of films.results) {
                                let body = document.querySelector("body");
                                let list = document.createElement("ul");
                                let listElement = document.createElement("li");
                                listElement.innerHTML = `<strong style="color: white; background-color:red;">Title ${count++} -></strong> ${film.title}`;
                                list.appendChild(listElement);
                                body.appendChild(list);
                            }
                        })

            
            //printing the people
           fetch(peopleUrl)
                        .then(res => {
                            return res.json()
                        })
                        .then( people => {
                            let count = 1;
                            for (let person of people.results) {
                                let body = document.querySelector("body");
                                let list = document.createElement("ul");
                                let listElement = document.createElement("li");
                                listElement.innerHTML = `<strong style="color: white; background-color:green;">Person ${count++} -></strong> ${person.name}`;
                                list.appendChild(listElement);
                                body.appendChild(list);
                            }
                        })


            //printing species

            fetch(speciesUrl)
                        .then(res => {
                            return res.json()
                        })
                        .then( species => { 
                            let count = 1;
                            for (let specimen of species.results) {
                                let body = document.querySelector("body");
                                let list = document.createElement("ul");
                                let listElement = document.createElement("li");
                                listElement.innerHTML = `<strong style="color: white; background-color:orange;">Specimen's name ${count++} -></strong> ${specimen.name} is classified as a ${specimen.classification}, spoken language is the ${specimen.language}`
                                list.appendChild(listElement);
                                body.appendChild(list);
                            }
                        })
            

            //printing starships

            fetch(starshipsUrl)
                        .then(res => {
                            return res.json()
                        })
                        .then( starships => { 
                            let count = 1;
                            // console.log(starships)
                            for (let starship of starships.results) {
                                let body = document.querySelector("body");
                                let list = document.createElement("ul");
                                let listElement = document.createElement("li");
                                listElement.innerHTML = `<strong style="color: white; background-color:purple;">Starship's name ${count++} -></strong> ${starship.name}; model ${starship.model} and manufactured by ${starship.manufacturer}`
                                list.appendChild(listElement);
                                body.appendChild(list);
                            }
                        })

            //Printing vehicles

            fetch(vehiclesUrl)
                        .then(res => {
                            return res.json()
                        })
                        .then( vehicles => { 
                            let count = 1;
                            // console.log(vehicles)
                            for (let vehicle of vehicles.results) {
                                let body = document.querySelector("body");
                                let list = document.createElement("ul");
                                let listElement = document.createElement("li");
                                listElement.innerHTML = `<strong style="color: white; background-color:brown;">vehicle's name ${count++} -></strong> ${vehicle.name}; model ${vehicle.model} and manufactured by ${vehicle.manufacturer}`
                                list.appendChild(listElement);
                                body.appendChild(list);
                            }
                        })
            
        })
        .catch((error) => {
            console.log("Look like smth went wrong");
            console.log(error);
        })


films: "https://swapi.dev/api/films/"
people: "https://swapi.dev/api/people/"
planets: "https://swapi.dev/api/planets/"
species: "https://swapi.dev/api/species/"
starships: "https://swapi.dev/api/starships/"
vehicles: "https://swapi.dev/api/vehicles/"