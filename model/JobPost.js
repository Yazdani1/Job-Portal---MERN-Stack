const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const jobposts = mongoose.Schema({
  name: {
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

  application: [
    {
      name: String,
      email: String,
      yearofexperience: String,
      workexperience: String,
      skills: String,
      projects: String,
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
module.exports = mongoose.model("Jobposts", jobposts);
