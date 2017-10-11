const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const routes = require('./config/routes');
const mongoose = require('mongoose');

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/evermilion');

// Routes
routes(app);

module.exports = app;