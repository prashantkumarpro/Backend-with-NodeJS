// var num = 45
// global.num2 = 67
// console.log(num2)

// const sum = require('./math/sum.js')
// const product = require('./math/product.js')

// console.log(sum(1, 2))
// console.log(product(1, 2))

const { sum, product } = require('./math')

console.log(product(1,2))
