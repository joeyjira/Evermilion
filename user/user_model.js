const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create User schema
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    }
    password: {
        type: String,
        required: true
    }
})

// Create User model
const User = mongoose.model('user', userSchema);

// Export User model
module.exports = User;

