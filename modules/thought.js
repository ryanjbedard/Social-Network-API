const { Schema, Types } = require('mongoose');
import { model } from 'mongoose';
import { Thought } from '.';

const thoughtSchema = new Schema(
  {
    thoughtText: {
        type: String,
        required: true,
        maxlength: 200,
        minlength: 1,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
        type: String,
        required: true,
    },
    reactions: {
        // Array of nested documents created with the reactionSchema
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
