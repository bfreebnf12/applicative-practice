import { data } from "../data/data";

// SPACE DATA EXERCISE 8
// Return a Planet name by a given moon name
// Return example: 'Planet Name'

export function findPlanetNameByMoon(data, moonName) {
    // Your code goes here...
    const [arr] = data.planets
        .filter((planet) => planet.moons !== undefined)
        .filter((planet) => planet.moons.find((moon) => moon === moonName))
        .map((planet) => planet.name)
    return arr
}









// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function