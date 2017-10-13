const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create User schema
const userSchema = new Schema({
    email: String,
    password: String
})

// Create User model
const User = mongoose.model('user', userSchema);

// Export User model
module.exports = User;

