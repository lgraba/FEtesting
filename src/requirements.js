// Requirements
// ------------

// * Immutable.js
// * Mocha (optional, just to run a test)
// In case the errors are nested, you need to make sure that concatenated string won't have recurring errors. The nested structures could be both objects and arrays. The nested structures are not preserved, transformed object should have flat structure by default.

Example:
```js
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
error = {
  name: 'Only alphanumeric characters are allowed.',
  names: 'Only alphanumeric characters are allowed.',
};
```
