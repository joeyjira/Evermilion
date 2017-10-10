const express = require('express');
const routes = require('./config/routes')
const app = express();

routes(app);

module.exports = app;