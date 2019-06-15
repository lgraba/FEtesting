// const {Map} = require('immutable')

// 1.
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
    }
    for (let key in obj) {
        result[key] = obj[key].join('. ')
    }
    return result
    // flatten(error, count - 1, result)
})
flatten(error)
console.log(flatten(error))

// 2.
// In case the errors are nested, you need to make sure that concatenated string won't have recurring errors. The nested structures could be both objects and arrays. The nested structures are not preserved, transformed object should have flat structure by default.

let error2 = {
    name: {
        first: ['Only alphanumeric characters are allowed'],
        last: ['Only alphanumeric characters are allowed'],
    },
    names: {} [{
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
    return transform
    // transform = Object.keys(error).reduce(function (r, k) {
    //     return r.concat(k, error[k])
    // }, [])
    // console.log("result",transform)
})
nestedMerge(error2)
console.log(nestedMerge(error2))


// 3.
// Sometimes, preserving nested structures could be useful when rendering errors on the screen. One of your implemented functions should take one or more arguments that specify the keys of error object for which you want to preserve the nested structure.
//
// For example, if you want to preserve nested structure for field `names`, the transformed object should look like:
error3 = {
  name: 'Only alphanumeric characters are allowed.',
  names: [{}, {
    first: 'Only alphanumeric characters are allowed.',
    last: 'Only alphanumeric characters are allowed.',
  }, {}],


  // const transformErrors = (obj)=>{
  //     nestedMerge()
  //     flatten()
  // }
  // transformErrors()
