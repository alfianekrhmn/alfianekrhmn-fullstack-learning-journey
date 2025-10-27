let express = require('express')
let app = express()
const router = express.Router()
const path = require('path');
let PORT = 4000

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`)
    next()
})
app.use(express.static('public'))

app.use('/about', router, (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'))
})

app.use('/admin', router, (req, res) => {
    res.end(`Access denied!`)
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})