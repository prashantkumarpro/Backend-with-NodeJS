// common JS Modules
// Synchronous

// const timer = require('./timer.js');

// console.log(timer)
// If we give full file path then we can load any file using cjs
// It is a convention to add cjs in the file extention
// Top level await is not allowed
// only one vlaue can be exported
// strict mode is not enabled by default
// file extention optional
// We have to set type : 'commonjs' in package.json file, it is optional because commonjs is default
// module stystem of nodejs
// In cjs this keyword points to module.exports by default
// cjs imports are not hoisted
//

// ES6 Modules
// Asynchronous file loading
// Top level await is allowed
// mjs imports are  hoisted
// only one vlaue can be exported
// strict mode is  enabled by default
// file extention mandatory
// multipale vlaue can be exported
// We cannot load any file, only js and mjs files are allowed
// It is a convention to add mjs in the file extention
// We have to set type : 'module' in package.json file
// In mjs this keyword is undefined

// import timer from './timer.js'
