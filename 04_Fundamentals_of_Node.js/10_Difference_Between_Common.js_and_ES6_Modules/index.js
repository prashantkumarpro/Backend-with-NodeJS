// import myvalue, { obj1, obj2, obj3, str, bool } from './timer.js'
// console.log(myvalue, { obj1, obj2, obj3, str, bool })

const  { obj1, obj2, obj3, str, bool } = require('./timer.js')
console.log({ obj1, obj2, obj3, str, bool })

// it works in mjs
// const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
// console.log(res)

// It works in cjs
// ;(async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//   console.log(res)
// })()

// module.exports.num = 27;
// module.exports.user = {name:"prashant"};
// console.log(this)

// console.log(this) // undefined in mjs

// console.log('running index.js')

// import timer from './timer.js'
// const timer = require('./timer.js')
