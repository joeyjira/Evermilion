const express = require('express');
const routes = require('./config/routes')
const mongoose = require('mongoose');
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/evermilion');

routes(app);

module.exports = app;