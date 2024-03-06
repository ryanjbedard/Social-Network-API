const { Schema, Types } = require('mongoose');
import { model } from 'mongoose';

const userSchema = new Schema(
  {
    userName: {
      type: String,
      unique: true,
      required: true,
      trimmed: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Please enter a valid email address'],
    },
    thoughts: [{
      type: Schema.Types.ObjectId,
      ref: 'Thought',
    }  
    ],
    friends: [{
        type: Schema.types.ObjectId,
        ref: 'User'
      }],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false,
  }
);

//Create virtual called friendCount that retrieves the length of the user's friends array field on query.
userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
  });

const User = model('User', userSchema);

module.exports = User;
