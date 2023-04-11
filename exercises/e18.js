import { data } from "../data/data";
//import { maxBy } from "./e17";


// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902

export function getGreatestDiscoveryYear(data) {
    // Your code goes here...
    // feel free to import your `maxBy` or `minBy` methods from previous lessons

    const asteroids = data.asteroids;
    const countNames = asteroids.map(function(asteroid) {
        return asteroid.discoveryYear;
    }).reduce((allNames, name) => {
        const currCount = allNames[name] ?? 0;
        return {
            ...allNames,
            [name]: currCount + 1,
        };

    }, {});
    return maxBy(countNames)

    function maxBy(object) {
        let max = 0;
        let Year = ''
        for (let element in object) {
            console.log(element, object[element])
            if (object[element] > max) {
                max = object[element]
                Year = element

            }
        }
        return parseInt(Year)
    }
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function