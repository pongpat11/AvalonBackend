const express = require('express');
const router = express();

const register = require('./api/register');

router.get('/', (req, res) => {
    res.send('Hello world');
});

// Register api
router.post('/register', register);

module.exports = router;