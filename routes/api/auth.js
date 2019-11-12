const User = require('../../model/User');

module.exports = async (req, res) => {
    const user = new User({
        email: req.body.email,
        password: req.body.password,
    });

    try {
        const userData = await User.findOne({
            email: user.email
        })
        if(userData.password === user.password) {
            res.json({message: 'success'});
        }
    } catch (err) {
        res.json({message: err});
    }
}