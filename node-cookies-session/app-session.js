// Import required modules
const express = require('express');
const session = require('express-session');

// Create an Express application
const app = express();

// Use express-session middleware to handle sessions
app.use(
    session({
        secret: 'your-secret-key',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false }, // Note: In a production environment, set secure to true for HTTPS
    })
);

// Route to set a session variable
app.get('/setSession', (req, res) => {
    // Set a session variable named 'username' with the value 'johnDoe'
    req.session.username = 'johnDoe';
    res.send('Session variable has been set!');
});

// Route to get the value of the session variable
app.get('/getSession', (req, res) => {
    // Retrieve the value of the 'username' session variable
    const username = req.session.username;
    res.send(`Username: ${username}`);
});

// Route to destroy the session
app.get('/destroySession', (req, res) => {
    // Destroy the session
    req.session.destroy((err) => {
        if (err) {
            console.error(err);
            res.send('Error destroying session');
        } else {
            res.send('Session has been destroyed!');
        }
    });
});

app.get('/', (req, res) => {
    res.send('<h1>hello session management study</h1>');
});

// Start the Express server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
