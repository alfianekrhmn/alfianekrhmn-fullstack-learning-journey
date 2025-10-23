const express = require('express')
const app = express()

// Home route
app.get('/', (req, res) => {
    res.end('Welcome to Home Page!')
})

// About route
app.get('/about', (req, res) => {
    res.end('This is the About Page!')
})

// Contact route
app.get('/contact', (req, res) => {
    res.end('This is the Contact Page!')
})

// Start server
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})


