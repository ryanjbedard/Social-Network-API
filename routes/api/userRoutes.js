const router = require('express').Router();
const { User } = require('../../models');


const {
  getSingleUser,
  getUser,
  createUser,
} = require('../../controllers/userController');

router.route('/').get(getUser).post(createUser);

router.route('/:postId').get(getSingleUser);

module.exports = router;
