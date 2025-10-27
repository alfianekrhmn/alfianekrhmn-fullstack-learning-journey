let express = require('express')
let app = express()
const router = express.Router()
let PORT = 4000
const fs = require('fs')


app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`)
    next()
})
app.use(express.static('public'))

app.use('/about', router, (req, res) => {
    res.end(fs.readFileSync('./public/about.html'))
})

app.use('/admin', router, (req, res) => {
    res.sendStatus(401)
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})