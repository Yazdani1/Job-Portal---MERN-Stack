const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

var postSchema = mongoose.Schema({
  title: {
    type: String,
  },
  des: {
    type: String,
  },
  city: {
    type: String,
  },

  house: {
    type: String,
  },
  country: {
    type: String,
  },

  jobtypes: {
    type: String,
  },

  requirements: {
    type: String,
  },

  skills: {
    type: String,
  },

  date: {
    type: Date,
    default: Date.now,
  },

  likes: [
    {
      type: ObjectId,
      ref: "User",
    },
  ],

  application: [
    {
      name: String,
      email: String,
      participants: Number,
      message: String,
      postedBy: { type: ObjectId, ref: "User" },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],

  postedBy: {
    type: ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("JobPost", postSchema);
