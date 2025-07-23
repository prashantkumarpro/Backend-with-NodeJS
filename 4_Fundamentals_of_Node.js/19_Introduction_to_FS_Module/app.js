// import fs from 'node:fs'
import fs from 'node:fs/promises'

// const content = fs.readFileSync('./index.html', 'utf-8')
// console.log(content)

// fs.readFile('./index.html', (err, data) => {
//   const content = data.toString()
//   console.log(content)
// })

// console.log('End')
console.time()
let i = 0
const timerId = setInterval(() => {
  console.log(i++)
  if (i === 50) {
    clearInterval(timerId)
    console.timeEnd()
  }
}, 5)

const a = await fs.readFile('./text.txt')
// console.log(a.toString())
console.log('reading done')

console.log('End')
