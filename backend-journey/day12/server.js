const express = require('express')
const app = express()
const PORT = 4000

app.use(express.json())

app.post('/user', (req, res) => {
    const { name, age } = req.body

    if(!name || !age){
        return res.status(400).json({
            success: false,
            message: `Please provide both name and age`
        })
    }

    res.status(200).json({
        success: true,
        message: `User ${name} (age: ${age}) has been created`
    })
})

app.post('/product', (req, res) => {
    const { id, name, price } = req.body
    if(!id || !name || !price) {
        return res.status(400).json({message: "Missing product data"})
    }
    res.status(201).json({message: `Product ${name} added with ID ${id}`})
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})