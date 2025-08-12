//*  require();
// typeof require; // function
//the require() function here takes 'path' as string argument and returns the 'module.exports' object of the module.
// so we can say that the return value of require() is the module.exports object of the module.
// if there is no exports object in the module, it will return an empty object.

//* Requiring individual modules. (sum.js and product.js)
// const sum = require('./sum.js'); // the require() function here will find the 'sum.js' file and start executing it. it executes all the code inside 'sum.js' and finally it will return every thing that is inside the module.exports object of the module. if there is no exports object in the module, it will return an empty object.

/// const product = require('./product.js');

//* requiring from math.js which has both sum and product functions.
//? Method 1:
const math = require('./math.js') // this will return the module.exports object of the module.
console.log(math) // { sum: [Function: sum], product: [Function: product] }
console.log(math.sum(1, 2, 3, 4)) // 10
console.log(math.product(1, 2, 3, 4)) // 24

//? Method 2:
// const { sum, product } = require('./math.js');
// console.log(sum(1, 2, 3, 4)); // 10
// console.log(product(1, 2, 3, 4)); // 24

//? Method 3: (not recommended)
// const [sum, product] = require('./math.js');
// console.log(sum(1, 2, 3, 4)); // 10

//? Experiment
// const [sum, product] = require('./math.js');
// console.log(sum, product);
// console.log(sum, product); //  H e
