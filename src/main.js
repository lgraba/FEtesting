const {List,Map} = require('immutable')
const Immutable = require('immutable')

// 1.
let error = {
    name: ['This field is required', 'Another error'],
    age: ['Only numeric characters are allowed'],
}
let immutableError = Immutable.fromJS(error)
// Desired output
// error = {
//   name: 'This field is required. Another error.',
//   age: 'Only numeric characters are allowed.'
// }

// Converting from and to Immutable Map
const flatten = ((obj, result = {}) => {
    obj = obj.toJS()

    if (obj.size === 0) {
        return obj
    }

    for (let key in obj) {
        result[key] = obj[key].join('. ')
    }

    return Immutable.fromJS(result)
})
console.log('#1: ', flatten(immutableError))

// 2.
// In case the errors are nested, you need to make sure that concatenated string
//  won't have recurring errors. The nested structures could be both objects and
//  arrays. The nested structures are not preserved, transformed object should
//  have flat structure by default.

let error2 = {
    name: {
        first: ['Only alphanumeric characters are allowed'],
        last: ['Only alphanumeric characters are allowed'],
    },
    names: [{
        first: ['Only alphanumeric characters are allowed'],
        last: ['Only alphanumeric characters are allowed'],
    }, {}],
}
let immutableError2 = Immutable.fromJS(error2)
// Desired output
// error = {
//   name: 'Only alphanumeric characters are allowed.',
//   names: 'Only alphanumeric characters are allowed.',
// }

// Map the given keys into a new object 
const mapper = function mapper(keys, temp = {}) {
    keys.map(
        (value, index) => {
            temp[value] = ''
        }
    )

    return temp
}

// Recursive nestedMerge
const nestedMerge = ((root, parentKey, path = Immutable.List(), result = mapper(root.keySeq().toArray())) => {
    if (!Immutable.isImmutable(root)) {
        // Leaf Node - return what we were passed
        return root
    }

    for (const [key, child] of root.toKeyedSeq()) {
        // If we don't have a result object, then we need to recurse and pass the Error value up
        if (!result)
            return nestedMerge(child, key, path.push(key), null)

        // If we do have a result object, we're at the top of the hierarchy and need to write some shit
        result[key] += nestedMerge(child, key, path.push(key), null) + '.'
    }

    return Immutable.fromJS(result)
})
console.log('#2: ', nestedMerge(immutableError2))

// 3.
// Sometimes, preserving nested structures could be useful when rendering errors
//  on the screen. One of your implemented functions should take one or more
//  arguments that specify the keys of error object for which you want to preserve
//  the nested structure. For example, if you want to preserve nested structure for field `names`, the
//  transformed object should look like:
error3response = {
    name: 'Only alphanumeric characters are allowed.',
    names: [{}, {
        first: 'Only alphanumeric characters are allowed.',
        last: 'Only alphanumeric characters are allowed.',
    }, {}]
}

// Hierarchy Retainment Recursive Merge
const nestedHierarchyMerge = ((
    root,
    parentKey,
    path = Immutable.List(),
    result = mapper(root.keySeq().toArray()),
    retain = 'names' // Could make this a List/Array in order to accept multiple retainers
) => {
    if (!Immutable.isImmutable(root)) {
        return root
    }

    for (const [key, child] of root.toKeyedSeq()) {
        if (!result)
            return nestedMerge(child, key, path.push(key), null, retain)

        result[key] += nestedMerge(child, key, path.push(key), null, retain) + '.'

        // If our key matches the retainer on the way back up out of the recursion,
        //  overwrite it with the entire child
        if (retain === key) {
            result[key] = child
        }
    }

    return Immutable.fromJS(result)
})
console.log('#3: ', nestedHierarchyMerge(immutableError2))

// Exports for the Mocha test file
exports._test = {
    flatten: flatten,
    nestedMerge: nestedMerge,
    nestedHierarchyMerge: nestedHierarchyMerge
}