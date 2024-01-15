const http = require('http');
const requesthandler = require('./routes');

const server = http.createServer(requesthandler);

server.listen(3000);
