const express = require('express');
const router = express();
const {check} = require('express-validator');

const permit = require('./permission');
const auth = require('./controller/auth');
const register = require('./controller/register');
const getUser = require('./controller/getUser');
const createRoom = require('./controller/createRoom');
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
router.get('/user', permit(), getUser);

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