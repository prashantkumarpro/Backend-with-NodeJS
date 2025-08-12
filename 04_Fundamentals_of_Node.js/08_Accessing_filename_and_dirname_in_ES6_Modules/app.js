import { num } from './math.js' // this will run first
import.meta.p = 'Prashant'
const { filename, dirname, p } = import.meta

console.log(dirname)
// process.chdir('./src')
// console.log(process.cwd())
