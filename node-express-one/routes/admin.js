const express = require('express');
const router = express.Router();
const path = require('path'); //helps with path

const rootDir = require('../util/path'); //using the path
const shopData = require('../routes/shop');

router.get('/', (req, res, next) => {
    //res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));

    //Below using templating engine pug -- Note you can convert html file into pug file by online converters
    //res.render('shop');

    const prods = shopData.products;
    console.log('check shopData.products length --- ', prods);
    //Passing data to pug file
    res.render('shop', {
        prods: prods,
        docTitle: 'Book Shop ',
    });
});

// router.get('/', (req, res, next) => {
//     res.send('<h1>Home Page</h1>');
// });

//router.post('/add-animal' Both  can have same routes as methods are different
//router.get('/add-animal'

router.get('/testhandlebar', (req, res, next) => {
    //Not sure why main.handlebars is being rendered and not myFile.handlebar
    res.render('myFile.handlebars', {
        title: 'Express Handlebars Example',
        message: 'Hello, Gufran  Handlebars!',
    });
});

router.get('/testejs', (req, res, next) => {
    res.render('test-ejs', {
        pageTitle: 'Express EJS Example',
        message: 'Hello, Gufran  EJS !',
    });
});

router.get('/test-partial-ejs', (req, res, next) => {
    res.render('partial-test', {
        pageTitle: 'Express  Partial EJS Example',
        message: 'Hello, Partial Gufran  EJS !',
    });
});

module.exports = router;
