import { data } from "../data/data";

// SPACE DATA EXERCISE 12
// Return the sum of all moons for all planets
// Return example: 42

export function allPlanetsMoonsCount(data) {
    // Your code goes here...
    let sum = 0;
    const planetsAndMoons = data.planets;
    planetsAndMoons.map(function(planets) {
        planets.moonsCount
        console.log(planetsAndMoons)
        if (planets.moonsCount !== undefined)
            if (planets.moonsCount) {
                sum += planets.moonsCount
            }
    });
    console.log(sum)
    return sum
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function