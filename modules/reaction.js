const { Schema, Types } = require('mongoose');
import { model } from 'mongoose';
import { Thought } from '.';

const reactionSchema = new Schema(
  {
    reactionId: {
        type: String,
        required: true,
        maxlength: 200,
        minlength: 1,
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false,
  }
);

module.exports = reactionSchema;
