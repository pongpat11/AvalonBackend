const express = require('express');
const router = express();
const User = require('../model/User');

router.get('/login', (req, res) => {
    res.send('Hello world');
});

router.post('/register', (req, res) => {
    const user = new User({
        email: req.body.email,
        password: req.body.password,
        name: req.body.name
    });
    user.save((err) => {
        if(err) res.json({message: err});
        else res.json({message: success});
    })
})

module.exports = router;