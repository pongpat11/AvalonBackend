const express = require('express');
const router = express();
const {check} = require('express-validator');

const permit = require('./permission');
const auth = require('./controller/authentication/auth');
const register = require('./controller/users/register');
const getUser = require('./controller/users/getUser');
const createRoom = require('./controller/rooms/createRoom');
const getWaitingRooms = require('./controller/rooms/getWaitingRooms');

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

// Get 1 user information from token 
router.get('/users', permit(), getUser);

router.post('/room', createRoom);
router.get('/rooms', getWaitingRooms);
/*
// socket io test
router.get('/test', (req, res) => {
  res.sendFile(__dirname + '/socketBackendTest.html');
});

router.get('/test2', (req, res) => {
  res.sendFile(__dirname + '/socketBackendTest2.html');
});
*/

module.exports = router;