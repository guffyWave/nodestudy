// Import the express and cookie-parser modules
const express = require('express');
const cookieParser = require('cookie-parser');

// Create an express app and use the cookie-parser middleware
const app = express();
app.use(cookieParser());

// Route to set a cookie
app.get('/setCookie', (req, res) => {
    // Set a cookie named 'user' with the value 'johnDoe'
    res.cookie('user', 'johnDoe', { maxAge: 900000, httpOnly: true });
    res.send('Cookie has been set!');
});

// Route to get the value of the cookie
app.get('/getCookie', (req, res) => {
    // Retrieve the value of the 'user' cookie
    const user = req.cookies.user;
    res.send(`User: ${user}`);
});

// Route to clear the cookie
app.get('/clearCookie', (req, res) => {
    // Clear the 'user' cookie
    res.clearCookie('user');
    res.send('Cookie has been cleared!');
});

app.get('/', (req, res) => {
    res.send('<h1>hello cookie study</h1>');
});

// Start the Express server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
