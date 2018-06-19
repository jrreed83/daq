const http = require('http');
const fs   = require('fs');
const path = require('path');

const server = http.createServer(function(request, response) {

    const { url } = request;
    let contentType = '';
    let fileToSend = '';
    if ( url === '/') {
        contentType = 'text/html';         
        fileToSend = './index.html';   

    } else {
        const ext = path.extname(url);
        if (ext === '.js') {
            contentType = 'text/javascript';
        } else if (ext === '.css') {
            contentType = 'text/css';         
        } 
        fileToSend = `.${url}`; 
    }
    
    fs.readFile(fileToSend, (err, data) => {
        if (err) {
            response.writeHead(500);
            response.end();
        }    
        response.writeHead(200, {'Content-Type': contentType});
        response.end(data,'utf8');
    })
});

server.listen(1234);