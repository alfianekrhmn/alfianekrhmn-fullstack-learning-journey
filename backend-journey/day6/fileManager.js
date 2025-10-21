const fs = require('fs') // Importing Node's built-in File System module

const fileSystem = (req, res) => {
    res.statusCode = 200
    res.setHeader("Content-Type", "text/plain")
    fs.writeFileSync('messege.txt', 'Hello Backend!', 'utf8')
    fs.appendFileSync('messege.txt', ' keep learning!')
    fs.readFile('messege.txt', 'utf8', (err, data) => {
        if(err) throw err
        res.end(data)
    })
}
module.exports = fileSystem
