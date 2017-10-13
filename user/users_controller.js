const User = require('./user_model');

module.exports = {
    async signUp(req, res, next) {
        console.log('UsersController.signUp() called');

        const { email, password } = req.body;
        const newUser = new User({ email, password });

        console.log(newUser);
        await newUser.save();

        res.json({ user: 'created' })
    },

    async signIn(req, res, next) {
        // Generate token
        console.log('UsersController.signIn() called!');
    },

    async secret(req, res, next) {
        console.log('UsersController.secret() called!');
    }
}