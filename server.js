const http = require('http');
const fs = require('fs');

const PORT = process.env.PORT || 4001;


let requestListener = (req, res) => {
    const index = './index.html';
    const callback = (err, data) => {
        if (err) {
            res.writeHead(200, {'Content-type': 'text/html'});
            res.write(`${err}`);
            res.end();
        } else {
            res.writeHead(200, {'Content-type': 'text/html'});
            res.write(data);
            res.end();
        }
    };
    fs.readFile(index, 'utf-8', callback);
};

const server = http.createServer(requestListener);
server.listen(PORT);