// math.js
function sum(...numbers) {
  return numbers.reduce((curr, acc) => curr + acc, 0);
}

function product(...numbers) {
  return numbers.reduce((curr, acc) => curr * acc, 1);
}

// console.log(module.exports === exports); // true

const customExports = module.exports;
// will the below code work?
// yes it will work because 'customExports' is now a reference to 'module.exports' same as 'exports'.
customExports.sum = sum; // is equivalent to 'exports.sum = sum';
customExports.product = product; // is equivalent to 'exports.product = product';

// console.log(module.exports); // { sum: [Function: sum], product: [Function: product] }

// but if we try to reassign the 'exports' to some other object then the reference will be broken and 'exports' will no longer be a reference to 'module.exports' object. // Eg:
// exports = { name: 'John' }; // this will break the reference

// but we can reassign the 'module.exports' as many time as we want. Eg:
module.exports = { name: 'John' }; // now this object will be returned when we require this module.