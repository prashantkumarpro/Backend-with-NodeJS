const fs = require('fs')

// Step 1: Write to the file synchronously
fs.writeFileSync('./greet.txt', 'Your content goes here')

// Step 2: Read and display the content
const text = fs.readFileSync('./greet.txt')
console.log('File content:', text.toString())

// Step 3: Rename the file
fs.renameSync('./greet.txt', './hello.txt')
console.log('File renamed to hello.txt')

// Step 4: Delete the renamed file
fs.unlinkSync('./hello.txt')
console.log('File deleted successfully')


