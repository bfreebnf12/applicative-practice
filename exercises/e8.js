import { data } from "../data/data";

// SPACE DATA EXERCISE 8
// Return a Planet name by a given moon name
// Return example: 'Planet Name'

export function findPlanetNameByMoon(data, moonName) {
    // Your code goes here...
    let planetName = ""
    const planets = data.planets;
    planets.map(function(planets) {
        //console.log(planet)
        if (planets.moons !== undefined) {
            //console.log(planets.name)
            const result = planets.moons.filter(planet => planet === moonName)
            if (result.length === 1) {
                planetName = planets.name
            }
        }
    });

    //console.log(planets);
    console.log(planetName)
    return planetName
}





// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function