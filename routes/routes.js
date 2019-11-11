const express = require('express');
const router = express();
const User = require('../model/User');

router.get('/login', (req, res) => {
    res.send('Hello world');
});

router.post('/register', async (req, res) => {
    const user = new User({
        email: req.body.email,
        password: req.body.password,
        name: req.body.name
    });
    try {
        const regUser = await user.save();
        res.json({message: 'success'});
    } catch (err) {
        res.json({message: err});
    }
})

module.exports = router;