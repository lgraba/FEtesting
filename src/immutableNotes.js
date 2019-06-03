// Immutable.js presents an API which does not update the data in -place, but instead always yields new updated data.  Immutability matters in functional programming for easier mathematical verification and easier testability. Using immutable data structures is a cornerstone of pure functional programming. Persistence means that the original data that were created are left unchanged. mmutable.js only provides data structures. This implies we can immutable.js on its own or together with any other libraries

// To translate these into Immutable:

Object {}
// becomes Map 
Map({})
// becomes List
List([])

// To convert normal JavaScript into Immutable, we can use the Map, List, or fromJS functions that Immutable provides:

import { Map, List, fromJS } from 'immutable'

// Normal Javascript
const person = {name: 'Will', pets: ['cat', 'dog']}
// To create the equivalent in Immutable:
const immutablePerson = Map({ name: 'Will', pets: List(['cat', 'dog'])})
// Or ...
const immutablePerson = fromJS(person)

// fromJS is a useful function that converts nested data into Immutable. It creates Maps and Lists in the conversion.

// Converting back from Immutable to normal JavaScript
// It is very simple to get your data back from Immutable to plain old JavaScript.You just call the.toJS() method on your Immutable object.
import { Map } from 'immutable'
const immutablePerson = Map({ name: 'Will'})
const person = immutablePerson.toJS()
console.log(person) // prints { name: 'Will' }

// With Immutable.js, we mutate and retrieve our data using methods.This is quite a change compared to the regular JavaScript way of directly setting data on an object, or retrieving it using a key.For example, this is how we retrieve data from an Immutable.js Map:

import { MapD } from 'immutable'

let person = Map({
    firstName: 'Thomas',
    lastName: 'Tuts'
})

person.firstName // -> undefined
person.get('firstName') // -> 'Thomas'