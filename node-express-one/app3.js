// Express Docs https://expressjs.com/en/guide/routing.html

const express = require('express');
const bodyparser = require('body-parser');

const app = express();

app.use(bodyparser.urlencoded({ extended: false })); // this middleware will pass next in the end

app.use('/add-product', (req, res, next) => {
    console.log('Add Product Middleware called ');
    res.send(
        '<form action="/product" method="POST"><input type="text" name="title"><button type="submit" >Add Product</button></form>'
    );
});

//app.get
//app.post
//app.use -- works with both get post

app.post('/product', (req, res, next) => {
    console.log(req.body); // this will read to undefied if body-parser not used
    //req.body used of POST and PUT
    res.redirect('/'); // redirect to home
});

app.get('/convertToJson', (req, res, next) => {
    console.log(req.query); //req.query used for GET
    res.send(req.query);
});

app.use('/', (req, res, next) => {
    res.send('<h1>Home Page</h1>');
});

app.listen(3000);
