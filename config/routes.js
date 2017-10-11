const UsersController = require('../user/users_controller');
const router = express.Router;

router.route('/signup')
    .post(UsersController.signUp);

router.route('/signin')
    .post(UsersController.signIn);

router.route('/secret')
    .get(UsersController.secret);

module.exports = router;
