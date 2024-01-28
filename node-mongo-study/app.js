const express = require('express');
const app = express();

const monngoConnection = require('./util/database');
const mongoConnect = require('./util/database').mongoConnect;
const { ObjectId } = require('mongodb');
const getDB = require('./util/database').getDB;

const COLLECTION_NAME = 'superheroes';

app.get('/', (req, res) => {
    res.send('<h1>hello mongo db </h1>');
});

app.get('/add-superhero', (req, res) => {
    try {
        const { name, about } = req.query;
        const db = getDB();
        const result = db.collection(COLLECTION_NAME).insertOne({
            name: name,
            about: about,
        });
        res.status(201).json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
    //  res.send('<h1>Done super hero </h1>');
});

// Get all users
app.get('/get-all', async (req, res) => {
    try {
        const heroes = await getDB()
            .collection(COLLECTION_NAME)
            .find()
            .toArray();
        res.json(heroes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get a specific user by ID
app.get('/superheroes/:id', async (req, res) => {
    try {
        console.log('check req param -- ', req.params.id);
        const hero = await getDB()
            .collection(COLLECTION_NAME)
            .findOne({ _id: new ObjectId(req.params.id) });
        //find({_id: new ObjectId(req.params.id}) // finds the  superhero by id
        if (!hero) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(hero);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a user by ID
// app.put('/superheroes/:id', async (req, res) => {
//   try {
//     const { name, age } = req.body;
//     const result = await  getDB().collection(COLLECTION_NAME).updateOne(
//       { _id: new ObjectId(req.params.id) },
//       { $set: { name, age } }
//     );
//     if (result.matchedCount === 0) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     res.json({ message: 'User updated successfully' });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// Delete a user by ID
//app.delete('/delete-superhero/:id', async (req, res) => { // Ideally use delete method of HTTP
app.get('/delete-superhero/:id', async (req, res) => {
    try {
        const result = await getDB()
            .collection(COLLECTION_NAME)
            .deleteOne({ _id: new ObjectId(req.params.id) });
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Create a new post and update the user with the post reference
// Below will NOT work as collection doen't exists
app.post('/posts', async (req, res) => {
    try {
        const { title, content, userId } = req.body;

        // Create a new post
        const postResult = await db
            .collection(POSTS_COLLECTION_NAME)
            .insertOne({ title, content });

        // Update the user with the post reference
        const userResult = await db
            .collection(USERS_COLLECTION_NAME)
            .updateOne(
                { _id: new ObjectId(userId) },
                { $push: { posts: postResult.insertedId } }
            );

        if (userResult.matchedCount === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(201).json({
            message: 'Post created and user updated successfully',
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//// Note Mongo DB compass is a GUI Desktop tool to connect with MongoDB

mongoConnect((client) => {
    console.log('mongo client -- ', client);
    console.log('mongo connected successfully ');
    app.listen(3000);
});
