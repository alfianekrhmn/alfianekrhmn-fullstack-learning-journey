const path = require('path')

const exportPath = (req, res) => {
    res.statusCode = 200
    res.setHeader("Content-Type", "text/plain")
    if(req.url == '/dirname'){
        res.end(path.dirname(__filename))
    }else if(req.url == '/join'){
        res.end(path.join(__dirname, 'message.txt'))
    }else if(req.url == '/extname'){
        res.end(path.extname(__filename))
    }else if(req.url == '/'){
        res.end("helooooooooo")
    }
}

module.exports = exportPath
