// let error = {
//     name: ['This field is required', 'Another error'],
//     age: ['Only numeric characters are allowed'],
// }
// transformed
// error = {
//   name: 'This field is required. Another error.',
//   age: 'Only numeric characters are allowed.'

// vanilla javascript with variables
// const flatten = (obj) => {
//   let newObj = {}
//   for (let key in obj) {
//   // console.log(obj[key])
//   newObj[key] = obj[key].join('. ')
//   }
//   console.log(obj)
//   return newObj
// }
// flatten(error)

// 1.
// with functional arguments
// const flatten = ((obj, count = Object.keys(obj).length, result = {}) => {
//     if (count === 0) {
//         return result
//     }
//     for (let key in obj) {
//         result[key] = obj[key].join('. ')
//     }
//     return result
// })
// console.log(flatten(error))

// In case the errors are nested, you need to make sure that concatenated string won't have recurring errors. The nested structures could be both objects and arrays. The nested structures are not preserved, transformed object should have flat structure by default.

// original error object
let error = {
  name: {
    first: ['Only alphanumeric characters are allowed'],
    last: ['Only alphanumeric characters are allowed'],
  },
  names: [{}, {
    first: ['Only alphanumeric characters are allowed'],
    last: ['Only alphanumeric characters are allowed'],
  }, {}],
};

// transformed
// error = {
//   name: 'Only alphanumeric characters are allowed.',
//   names: 'Only alphanumeric characters are allowed.',
// }

const nestedMerge = ((obj, count = Object.keys(obj).length, result = {}) => {
    if (count === 0) {
        return result
    }
  for (let key in obj){
     return result[key] = obj[key].join
  }
})
console.log(nestedMerge(error))