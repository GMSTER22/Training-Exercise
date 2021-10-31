const fetchPlanets = (url = "https://swapi.dev/api/people") => {
    console.log(url)
    return axios.get(url)
}

const printPlanets = ({data}) => {
    for (let result of data.results) {
        console.log(result.name);
    }
    return Promise.resolve(data.next)
}

fetchPlanets()
            .then( printPlanets)
            .then( fetchPlanets)
            .then( printPlanets)
            .then( fetchPlanets)
            .then( printPlanets)
            .catch(error => console.log(error, "Error has been registered"))
