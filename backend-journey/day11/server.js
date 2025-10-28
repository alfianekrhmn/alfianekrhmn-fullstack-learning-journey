const express = require('express')
const app = express()
const PORT = 4000

app.get('/', (req, res) => {
    res.send(`hello World`)
})

app.use(express.json())

app.get('/user/:fullname', (req, res) => {
    const fullname = req.params.fullname
    const age = req.query.age
    if(!fullname || !age) {
        res.send(`Please provide fullname and age`)
    }else{
        res.send(`Hello ${fullname} and i'm ${age} years old`)
    }
})

app.get('/product/:id', (req, res) => {
    if(isNaN(req.params.id)){
        res.send(`Invalid ID`)
    }else{
        res.send(`Product ID : ${req.params.id}`)
    }
})

app.get('/blog/:author/:title', (req, res) => {
    const author = req.params.author
    const title = req.params.title
    if(title.length > 20) {
        res.send(`Title too long!`)
    }else{
        res.send(`Post: ${title} by ${author}`)
    }
})


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})