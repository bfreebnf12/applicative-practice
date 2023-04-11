// see e16.md

export function find(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            console.log(array[i])
            return array[i]
        }
    }
    return undefined
}
//array.find(callback => callback.v)