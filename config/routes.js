const UsersController = require('../user/users_controller');

module.exports = (app) => {
    app.get('/api', UsersController.greeting);
}