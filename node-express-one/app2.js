// Express Docs https://expressjs.com/en/guide/routing.html

const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
    console.log('This always runs ');
    next();
});

// adding before the / route
app.use('/add-product', (req, res, next) => {
    console.log('Add Product Middleware called ');
    res.send('<h1>The Add product page</h1>');
});

app.use('/users', (req, res, next) => {
    res.send({ name: 'Gufran Khurshid', profession: 'Project Manager' });
});

app.listen(3000);
