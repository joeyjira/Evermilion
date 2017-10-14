const JWT = require('jsonwebtoken');
const User = require('./user_model');
const { JWT_SECRET } = require('../config/secret');

function signToken(user) {
    return JWT.sign({
        iss: 'Evermilion',
        sub: user.id,
        iat: new Date().getTime(),
        exp: new Date().setDate(new Date().getDate() + 1)
    }, JWT_SECRET);
} 

module.exports = {
    async signUp(req, res, next) {
        const { email, password } = req.body;

        // Check if there is already user with the same email
        const foundUser = await User.findOne({ email });
         if (foundUser) {
            return res.status(403).send({ error: "Email already exists!"});
        }
        // Create a new user
        const newUser = new User({ email, password });
        await newUser.save();

        // Respond with token
        // res.json({ user: 'created' })
        const token = signToken(newUser);

        res.status(200).json({ token })
    },

    async signIn(req, res, next) {
        // Generate token
        console.log('UsersController.signIn() called!');
    },

    async secret(req, res, next) {
        console.log('UsersController.secret() called!');
    }
}