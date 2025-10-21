const path = require('path')
const fs = require('fs')

const renderPages = (req, res) => {
    res.setHeader("Content-Type", "text/html")
    let filePath = '.' + req.url
    if(filePath == './') {
        filePath = './pages/index.html'
    }else if(filePath == './contact'){
        filePath = './pages/contact.html'
    }else if(filePath == './about'){
        filePath = './pages/about.html'
    }

    const absolutePath = path.join(__dirname, filePath)
    fs.readFile(absolutePath, (err, data) => {
        if(err){
            res.end('404 Not Found')
        }else {
            let contentType = 'text/html'
            const ext = path.extname(absolutePath)
            switch(ext){
                case 'index.html':
                    contentType = 'text/html';
                    break;
                case 'about.html':
                    contentType = 'text/html';
                    break;
                case 'contact.html':
                    contentType = 'text/html';
                    break;
            }
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(data);
        }
    })
}

module.exports = renderPages