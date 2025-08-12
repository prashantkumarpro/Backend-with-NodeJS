// for (let i = 0; i < 10000; i++) {}

// console.log('running timer.js')

// import timer from './timer3.js'
// const timer = require('./timer3.js')

// export default 'tiemr'

// export const obj1 = {name:'prashant'}
// export const obj2 = {name:'Akash'}
// export const obj3 = {name:'Prakash'}
// export const num = 5;
// export const str = 'string';
// export const bool = false;

// export default 'my default value'

const obj1 = { name: 'prashant' }
const obj2 = { name: 'Akash' }
const obj3 = { name: 'Prakash' }
const num = 5
const str = 'string'
const bool = false

// exports !== export
// module.exports !== export default

module.exports = {
  obj1,
  obj2,
  obj3,
  num,
  str,
  bool
}
