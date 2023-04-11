export function minBy(array, cb) {
    let mini = array[0]
        //console.log(array)
    for (let element of array) {
        // Only if the callback that we apply returns something truthy, does it get pushed into the new array
        if (cb(element) < cb(mini)) {
            mini = element

            console.log(element)
        }
    }
    return mini
}
export function maxBy(array, cb) {
    let max = array[0]
    for (let element of array) {
        if (cb(element) > cb(max)) {
            max = element
            console.log(element)
                //return maxBy
        }
    }
    return max
}

//array.find((person) => person.age < 30)