const http = require("http")
const handleRoutes = require("./routes")


let server = http.createServer((req, res) => {
    handleRoutes(req, res)
})

const PORT = 3000
server.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`)
})