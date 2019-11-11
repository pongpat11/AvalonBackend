const User = require('../../model/User');

module.exports = async (req, res) => {
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
}