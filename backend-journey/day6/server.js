const http = require('http')
const moduleFs = require('./fileManager')

let server = http.createServer((req, res) => {
    moduleFs(req, res)
})

const PORT = 3456
server.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`)
})