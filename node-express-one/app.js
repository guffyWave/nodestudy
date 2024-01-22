// Express Docs https://expressjs.com/en/guide/routing.html

const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const exphbs = require('express-handlebars');

//const shopRouter = require('./routes/shop');  or
const shopData = require('./routes/shop');
const adminRouter = require('./routes/admin');
const travellers = require('./routes/travellers');

const app = express();

// Create an instance of the handlebars engine
// const hbs = exphbs.create({
//     defaultLayout: 'main', // Set the default layout file (main.hbs)
//     layoutsDir: 'views/layouts', // Set the directory for layout files
// });

//app.set('title', 'Gufran Khurshid'); // generic way to store any value
//app.set('view engine', 'pug'); // setting view engine as pug
// app.set('views,'views') -- can set where the views are ,but ythe default settings are already set

//OLD Handlebar
// app.engine('handlebars', expressHandlebars()); //setting engine
// app.set('view engine', 'handlebars'); // view filenamne will be *.handlebars else id set hbs filenamke should be .hbs

// NEW - Set the view engine to Handlebars
// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');

//EJS
app.set('view engine', 'ejs'); // setting view engine as ejs

app.use(bodyparser.urlencoded({ extended: false })); // this middleware will pass next in the end
app.use(express.static(path.join(__dirname, 'public'))); // now express wil allow to lets acess public dir

// sequence matters
//app.use(shopRouter); // when in shop.js exported as  module.exports = router;
app.use(shopData.routes);
app.use(adminRouter);
app.use('/explore', travellers);

//404 Page
app.use((req, res, next) => {
    //res.status(403).sendFile(path.join(__dirname, 'views', '404.html'));
    res.status(403).send('<h1>Page Not Found </h1>');
});

app.listen(3000);
