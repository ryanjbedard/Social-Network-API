const router = require('express').Router();
const { Thought, User } = require('../../models');


const {
  getSingleThought,
  getThought,
  createThought,
} = require('../../controllers/thoughtController');

router.route('/').get(getThought).post(createThought);

router.route('/:postId').get(getSingleThought);

module.exports = router;
