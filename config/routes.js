const UsersController = require('../user/users_controller');

module.exports = (app) => {
    app.post('/api/users', UsersController.create)
};