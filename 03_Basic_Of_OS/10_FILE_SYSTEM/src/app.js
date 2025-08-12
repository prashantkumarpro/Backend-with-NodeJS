import fs from 'fs/promises'
const d = await fs.readFile('welcome7.jpg', 'base64')
fs.writeFile('without-base64-encoding.txt', d)
