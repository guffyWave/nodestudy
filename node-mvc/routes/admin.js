const express = require('express');
const router = express.Router();

const productController = require('../controllers/products');

// adding controller  GET
router.get('/add-product', productController.getAddProduct);

// // regular router
// router.get('/add-product', (req, res, next) => {
//     res.render('products-main', {
//         pageTitle: 'Express EJS Example',
//         message: 'Hello, Products  EJS !',
//     });
// });

//router.post('/add-product'.productController.postAddProduct);

module.exports = router;

//Not sure why it doesn't work
// exports.routes = router;
// exports.products = products;
