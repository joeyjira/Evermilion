const UsersController = require('./users_controller')
const { validateBody, schemas } = require('../config/route_helper');

module.exports = app => {
    app.post('/users/signup', 
    validateBody(schemas.authSchema), 
    UsersController.signUp
)}