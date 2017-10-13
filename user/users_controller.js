const User = require('./user_model');

module.exports = {
    async signUp(req, res, next) {
        const { email, password } = req.body;

        // Check if there is already user with the same email
        const foundUser = await User.find({ email });
        if (foundUser) {
            return res.status(403).send({ error: "Email already exists!"});
        }
        // Create a new user
        const newUser = new User({ email, password });
        await newUser.save();

        // Respond with token
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