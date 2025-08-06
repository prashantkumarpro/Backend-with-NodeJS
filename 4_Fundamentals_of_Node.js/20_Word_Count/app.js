import fs from 'node:fs/promises'
const content = await fs.readFile('./file-1.txt', 'utf-8')

const wordArray = content
  .split(/[\W]+/)
  .filter(word => word.length > 0)
  .map(word => word.toLowerCase())

const wordCount = {}

wordArray.forEach(word => {
  if (wordCount[word]) {
    wordCount[word] += 1
  } else {
    wordCount[word] = 1
  }
})

console.log(wordCount)
