const http = require('http')
const pathServer = require('./pathManager')

let server = http.createServer((req, res) => {
    pathServer(req, res)
})

const PORT = 3000
server.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`)
})