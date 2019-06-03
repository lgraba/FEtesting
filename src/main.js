// const {Map} = require('immutable')
let error = {
    name: ['This field is required', 'Another error'],
    age: ['Only numeric characters are allowed'],
}
// transformed goal
// error = {
//   name: 'This field is required. Another error.',
//   age: 'Only numeric characters are allowed.'
// }

const flatten = ((obj, count = Object.keys(obj).length, result = {}) => {
    if (count === 0) {
        return result
        // base case when both obj property names have already been counted. 
    }
    for (let key in obj) {
        // iterates over object
        result[key] = obj[key].join('. ')
        // sets new object called result to have the error objects properties names as keys
        // concates the strings into new stings, separated by a period.
    }
    return result
    // flatten(error, count - 1, result)
    // console.log("result:", result)
})
flatten(error)
console.log(flatten(error))

// In case the errors are nested, you need to make sure that concatenated string won't have recurring errors. The nested structures could be both objects and arrays. The nested structures are not preserved, transformed object should have flat structure by default.

let error2 = {
    name: {
        first: ['Only alphanumeric characters are allowed'],
        last: ['Only alphanumeric characters are allowed'],
    },
    names: {}[{
        first: ['Only alphanumeric characters are allowed'],
        last: ['Only alphanumeric characters are allowed'],
    }, {}],
}
// transformed
// error = {
//   name: 'Only alphanumeric characters are allowed.',
//   names: 'Only alphanumeric characters are allowed.',
// }

const nestedMerge = ((error, transform = {}) => {
    if (error.name.first.toString() === error.name.last.toString()) {
     transform.name = error.name.first.toString()
     transform.names = error.name.first.toString()
    }
    console.log(transform)
})
nestedMerge(error2)
