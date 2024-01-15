const express = require('express');
const router = express.Router();

const products = [];

router.use('/add-product', (req, res, next) => {
    //console.log('Add Product Middleware called ');
    res.send(
        '<form action="/product" method="POST"><input type="text" name="title"><button type="submit" >Add Product</button></form>'
    );
    // res.redirect('/');
});

router.post('/product', (req, res, next) => {
    console.log(req.body); // this will read to undefied if body-parser not used
    products.push({ title: req.body.title });
    console.log('check products length ---', products.length);
    //req.body used of POST and PUT
    res.redirect('/'); // redirect to home
});

router.get('/convertToJson', (req, res, next) => {
    console.log(req.query); //req.query used for GET
    res.send(req.query);
});

// module.exports = router;
// module.products = products;

//OR another way as below

exports.routes = router;
exports.products = products;
