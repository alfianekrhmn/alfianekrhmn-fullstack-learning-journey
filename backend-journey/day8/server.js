const http = require('http')
const renderPages = require('./pageServer')

let server = http.createServer((req, res) => {
    renderPages(req, res)
})

const PORT = 4000
server.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`)
})