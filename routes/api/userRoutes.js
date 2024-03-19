const express = require('express');
const router = require('express').Router();
const { getThought, getSingleThought, createThought } = require('../../controllers/thoughtController');


router.route('/thoughts').get(getThought).post(createThought);
router.route('/thoughts/:thoughtId').get(getSingleThought);


const {
  getSingleUser,
  getUser,
  createUser,
} = require('../../controllers/userController');

router.route('/').get(getUser).post(createUser);

router.route('/:userId').get(getSingleUser);

module.exports = router;
