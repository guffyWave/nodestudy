// controllers/tasksController.js
const Task = require('../models/task');

const tasks = [];

const tasksController = {
    getAllTasks: (req, res) => {
        res.render('tasks/index', { tasks });
    },

    addTask: (req, res) => {
        const { title } = req.body;
        const newTask = new Task(tasks.length + 1, title, false);
        tasks.push(newTask);
        res.redirect('/tasks');
    },

    // Other controller actions like updateTask, deleteTask, etc.
};

module.exports = tasksController;
