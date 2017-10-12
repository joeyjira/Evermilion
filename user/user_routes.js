const UsersController = require('./users_controller');
const express = require('express');
const router = express.Router();
const { validateBody, schemas } = require('../config/route_helper');

router.route('/signup')
    .post(validateBody(schemas.authSchema), UsersController.signUp);

router.route('/signin')
    .post(UsersController.signIn);

router.route('/secret')
    .post(UsersController.secret);

module.exports = router;
