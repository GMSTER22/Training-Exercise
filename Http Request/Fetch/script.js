const url = "https://swapi.dev/api";

fetch(url)
        .then( res => {
            res.json()
            .then( data => {
                const filmUrl = data.films;
                const peopleUrl = data.people;
                const planetsUrl = data.planets;
                const speciesUrl = data.species;
                const starshipsUrl = data.starships;
                const vehiclesUrl = data.vehicles;
                console.log(filmUrl, peopleUrl, planetsUrl, speciesUrl, starshipsUrl, vehiclesUrl)
                console.log(data)
                
                //printing the films
                fetch(filmUrl)
                            .then(res => {
                                res.json()
                                        .then( films => { 
                                            for (let film of films.results) {
                                                console.log(film.title)
                                            }
                                            console.log("\n")
                                        })
                            })

                
                //printing the planets
               fetch(peopleUrl)
                            .then(res => {
                                res.json()
                                        .then( people => {
                                            console.log(people.results)
                                            for (let person of people.results) {
                                                console.log(person.name)
                                            }
                                        })
                            })
                
            })

        })


films: "https://swapi.dev/api/films/"
people: "https://swapi.dev/api/people/"
planets: "https://swapi.dev/api/planets/"
species: "https://swapi.dev/api/species/"
starships: "https://swapi.dev/api/starships/"
vehicles: "https://swapi.dev/api/vehicles/"