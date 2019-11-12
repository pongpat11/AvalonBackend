const express = require('express');
const router = express();

const auth = require('./api/auth');
const register = require('./api/register');

router.post('/', auth);

// Register api
router.post('/register', register);

module.exports = router;