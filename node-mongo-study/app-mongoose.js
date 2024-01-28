// Import required modules
const express = require('express');
const mongoose = require('mongoose');

const DB_NAME = 'gufrandatabase';

// Create an Express application
const app = express();
app.use(express.json());

// Connect to MongoDB using Mongoose
mongoose.connect(
    'mongodb+srv://guffy1267:FAFrDXteBlh2T71y@cluster0.nwfbyqe.mongodb.net/' +
        DB_NAME +
        '?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);
const db = mongoose.connection;

// Define a Mongoose schema for the data model
const todoSchema = new mongoose.Schema({
    task: { type: String, required: true },
    completed: { type: Boolean, default: false },
});

// Create a Mongoose model based on the schema
const Todo = mongoose.model('Todo', todoSchema);

// ------------------ CRUD operations ------------------

// Create a new todo
app.get('/create-todo', async (req, res) => {
    try {
        const { task, completed } = req.query;
        const newTodo = new Todo({ task, completed });
        const savedTodo = await newTodo.save();
        res.status(201).json(savedTodo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Read all todos
app.get('/todos', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a todo by ID
// app.patch('/todos/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const { task, completed } = req.body;
//         const updatedTodo = await Todo.findByIdAndUpdate(
//             id,
//             { task, completed },
//             { new: true }
//         );
//         res.status(200).json(updatedTodo);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// Delete a todo by ID
// app.delete('/todos/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     await Todo.findByIdAndDelete(id);
//     res.status(204).end();
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

app.get('/', (req, res) => {
    res.send('<h1>Hello Mongoose  </h1>');
});

// Set up the server to listen on port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
