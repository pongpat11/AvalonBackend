const express = require('express');
const router = express();
const {check, validatorResult} = require('express-validator');

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