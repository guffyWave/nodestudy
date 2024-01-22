const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');

const adminRoutes = require('./routes/admin');
const tasksController = require('./controllers/tasksController');

const app = express();

//EJS
app.set('view engine', 'ejs'); // setting view engine as ejs
app.use(bodyparser.urlencoded({ extended: false })); // this middleware will pass next in the end
app.use(express.static(path.join(__dirname, 'public'))); // now express wil allow to lets acess public dir

app.use(adminRoutes);
app.get('/tasks', tasksController.getAllTasks);
app.post('/tasks', tasksController.addTask);

app.use('/', (req, res, next) => {
    res.send('<h1>Home Page</h1>');
});

app.listen(3000);
