const express = require('express');
const router = express.Router();

router.get('/',(req, res, next) => {
    console.log('adi');
    // Send the initial HTML response with a form
    res.send('<h1>I love Sakthipriya</h1><form action="/love" method="post"><input type="text" name="user_input"><input type="submit" value="Submit"></form>');
    next();
});

router.post('/love', (req, res, next) => {
    // Handle the POST request to /love
    res.send('<h1>Successful</h1>');
});

// This middleware will only execute if the request didn't match /love route
//router.use((req, res, next) => {
    //res.send('<h1>Adithyan</h1>');
//});

module.exports = router;