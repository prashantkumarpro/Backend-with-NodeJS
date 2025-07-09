const http = require('http')
const fs = require('fs')
const path = require('path')

const PORT = 3000

const server = http.createServer((req, res) => {
  let filePath = ''

  if (req.url === '/') {
    filePath = path.join(__dirname, 'index.html')
  } else if (req.url === '/about') {
    filePath = path.join(__dirname, 'about.html')
  } else if (req.url === '/api') {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    const data = {
      name: 'Prashant Kumar',
      role: 'Web Developer',
      message: 'Learning Node.js core server 🚀'
    }
    return res.end(JSON.stringify(data)) // ✅ return to stop further code
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' })
    return res.end('404 Page Not Found') // ✅ return to stop further code
  }

  // Read and serve the HTML file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500)
      return res.end('Server Error')
    }

    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end(content)
  })
})

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
