const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const { JWT_SECRET } = require('./config/secret');
const User = require('./user/user_model');

passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: JWT_SECRET
}, async (payload, done) => {
    try {
        // Find the user specified in token
        const user = await User.findById(payload.sub)
        // If user doesn't exist, handle it

        // Otherweise, return user
    } catch(error) {
        done(error, false);
    }
}))