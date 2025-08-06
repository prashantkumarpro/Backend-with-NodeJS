import { readFile, writeFile, appendFile } from 'node:fs/promises'

// const contentBuffer = await readFile('ssss.jpg')
// console.log(contentBuffer)

// // writeFile.writeFile('./file.txt', 'Hello world!')
// writeFile('./ss.jpg', contentBuffer)

try {
  const contentBuffer = await readFile('ssss.jpg')
  writeFile('./papa.jpg', contentBuffer)
} catch (error) {
  appendFile(
    'error.log',
    `\n\n${new Date().toLocaleTimeString()}\n${error.message}\n${error.stack}`
  )
  console.log(error)
  console.log('To see full error message go to ./error.log file')
}
