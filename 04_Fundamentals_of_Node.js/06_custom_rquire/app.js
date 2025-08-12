// const vm = require('vm')
// const num = 5

// vm.runInNewContext('console.log(num)', { num })

const b = loadModule('./math.js')

function loadModule (path) {
  const fs = require('fs')
  const vm = require('vm')
  const fileContent = fs.readFileSync(path).toString()

  return (function (send, require, module, __filename, __dirname) {
    vm.runInNewContext(fileContent, { send, loadModule,console })
    return send
  })({})
}
