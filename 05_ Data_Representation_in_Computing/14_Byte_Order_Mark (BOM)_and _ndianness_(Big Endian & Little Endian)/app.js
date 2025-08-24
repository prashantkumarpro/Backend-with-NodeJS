import fs from 'fs/promises'
const bufferContent = await fs.readFile('text.txt')
console.log(bufferContent.toString())
function bufferToString (buffer) {
  return Array.from(buffer)
    .map(byte => String.fromCharCode(byte))
    .join('')
}

// Now bufferContent.toString() and bufferToString(buffer) will do same thing 

console.log(bufferToString(bufferContent))
console.log(bufferContent) //<Buffer 61 20 62 20 63 20 64 20 65 20>

const buf = Buffer.from('Hi')
console.log(buf)
// <Buffer 48 69>
