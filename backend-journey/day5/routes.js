const route = (req, res) => {
    res.statusCode = 200
    res.setHeader("Content-Type", "text/plain")
    if(req.url == '/'){
        res.end("testetststs")
    }else if(req.url == '/about'){
        res.end("ahahahaah")
    }else if(req.url == '/contact'){
        res.end('jajajajajaja')
    }else{
        res.end('404 not found')
    }
}

module.exports = route