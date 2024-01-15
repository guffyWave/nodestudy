const http = require('http');

const express = require('express');

//express returns a function e
const app = express();

//app next is a function that will be passed by express js to this function
app.use((req, res, next) => {
    console.log('Middleware called ');
    //Below allows the request to continue to next middleware inline
    next(); // next must be called so that next middleware cann be called
});

//sequence of middleware matters
app.use((req, res, next) => {
    console.log('Second Middleware called ');
    //res.setHeader('Content-Type', 'application/json'); setting custom header
    //     res.send(Buffer.from('wahoo'));
    //   res.send({ some: 'json' });
    //     res.send('<p>some html</p>');
    res.send('<h1>Hello Bismillah Hirrahman Nirahim from Express ! </h1>');
});

// const server = http.createServer(app);

// server.listen(3000);

//last two lines are being called by app.listen 
app.listen(3000);
