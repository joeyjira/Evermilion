const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./user/user_routes');

// Initialiaze express server
const app = express();

// Middleware
app.use(morgan('dev'))
app.use(bodyParser.json());

// Configure Routes
userRoutes(app);

// Tells app to listen on port
const PORT = process.env.PORT || 3000

app.listen(3000, function() {
    console.log(`Listening on PORT ${PORT}`)
})
