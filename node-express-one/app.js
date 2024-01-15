// Express Docs https://expressjs.com/en/guide/routing.html

const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');

//const shopRouter = require('./routes/shop');  or
const shopData = require('./routes/shop');
const adminRouter = require('./routes/admin');
const travellers = require('./routes/travellers');

const app = express();

app.set('title', 'Gufran Khurshid'); // generic way to store any value

app.set('view engine', 'pug'); // setting view engine as pug
// app.set('views,'views') -- can set where the views are ,but ythe default settings are already set

app.use(bodyparser.urlencoded({ extended: false })); // this middleware will pass next in the end
app.use(express.static(path.join(__dirname, 'public'))); // now express wil allow to lets acess public dir

// sequence matters
//app.use(shopRouter); // when in shop.js exported as  module.exports = router;
app.use(shopData.routes);
app.use(adminRouter);
app.use('/explore', travellers);

//404 Page
app.use((req, res, next) => {
    res.status(403).sendFile(path.join(__dirname, 'views', '404.html'));
    //res.status(403).send('<h1>Page Nont Found </h1>');
});

app.listen(3000);
