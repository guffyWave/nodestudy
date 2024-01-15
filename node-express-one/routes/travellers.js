const express = require('express');
const router = express.Router();
const app = express();

// Will be accessed  /explore/add => POST
router.post('/add', (req, res, next) => {
    // finally it will be accessed /explore/add
    res.send('<h1>Add Travellers  </h1>');
});

// Will be accessed  /explore/getAll => GET
router.get('/getAll', (req, res, next) => {
    console.log('check app get ----', app.get('title')); // Not sure why its not working 
    res.send('<h1>Get All Travellers </h1>');
});

module.exports = router;
