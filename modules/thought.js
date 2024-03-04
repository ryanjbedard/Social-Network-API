const { Schema, Types } = require('mongoose');
import { model } from 'mongoose';
import { Thought } from '.';

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    createdAt: {
      type: String,
      unique: true,
      required: true,
      trimmed: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Please enter a valid email address'],
    },
    reactions: {
        // Array of `_id` values referencing the `Thought` model
        type: Schema.Types.ObjectId,
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

//Create a virtual property `reactionCount` that gets the amount of reactions per thought.
postSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
  });

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
