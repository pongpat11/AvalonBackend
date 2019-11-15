const express = require('express');
const router = express();
const {check} = require('express-validator');

const permit = require('./permission');
const auth = require('./controller/auth');
const register = require('./controller/register');

// Login
router.post('/login', [ 
    check('email').isEmail(),
    check('password').isLength({min: 5})
  ], auth);

// Register api
router.post('/register', [
  check('email').isEmail(),
  check('password').isLength({min: 5})
], register);

module.exports = router;