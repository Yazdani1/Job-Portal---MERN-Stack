const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

var postSchema = mongoose.Schema({
  title: {
    type: String,
  },
  des: {
    type: String,
  },
  location: {
    type: String,
  },

  jobtypes: {
    type: String,
  },

  startdate: {
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
