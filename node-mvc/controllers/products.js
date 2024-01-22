//importing the model (class)

const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('products-main', {
        pageTitle: 'Express EJS Example',
        message: 'Hello, Products  EJS !',
    });
};

exports.postAddProduct = (req, res, next) => {
    // products.push({ title: req.body.title });
    const p = new Product(req.body.title);
    product.save();
    res.redirect('/');
};
