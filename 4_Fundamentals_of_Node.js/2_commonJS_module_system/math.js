// math.js
function sum(...numbers) {
  return numbers.reduce((curr, acc) => curr + acc, 0);
}

function product(...numbers) {
  return numbers.reduce((curr, acc) => curr * acc, 1);
}

//* Methods to export a module:
//? Method 1:
// module.exports = {
//   sum,
//   product
// };
// in the import file, we will have to destructure it to import the module like this:
// const{ sum, product } = require('./math.js'); // this will work.

//? Method 2:
// module.exports.sum = sum;
// module.exports.product = product;
// in the import file, we will have to destructure it to import the module like this:
// const{ sum, product } = require('./math.js');

//? Method 3:
// exports.sum = sum;
// exports.product = sum;
// in the import file, we will have to destructure it to import the module like this:
// const{ sum, product } = require('./math.js');

//? Method 4:
// we can also export them using Array Destructuring. ( not recommended)
// module.exports = [sum, product];
// in the import file, we will have to destructure it to import the module like this:
// const [sum, product] = require('./math.js');

//? Experiment
// module.exports = 'Hello'
// import [ sum, product ] from './math.js';
// console.log(sum, product); // H e