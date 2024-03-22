const express = require('express');
const router = require('express').Router();
const {
  getSingleUser,
  getUsers,
  createUser,
} = require('../../controllers/userController');
const { getThought, getSingleThought, createThought } = require('../../controllers/thoughtController');


router.route('/thoughts').get(getThought).post(createThought);
router.route('/thoughts/:thoughtId').get(getSingleThought);



router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getSingleUser);

module.exports = router;
