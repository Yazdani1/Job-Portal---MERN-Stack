const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const appliedjobslist = mongoose.Schema({
  name: {
    type: String,
  },

  email: {
    type: String,
  },

  yearofexperience: {
    type: String,
  },

  workexperience: {
    type: String,
  },

  skills: {
    type: String,
  },
  projects: {
    type: String,
  },

  date: {
    type: Date,
    default: Date.now,
  },

  jobpost: {
    type: ObjectId,
    ref: "Jobposts",
  },

  postedBy: {
    type: ObjectId,
    ref: "User",
  },
});
module.exports = mongoose.model("AppliedJobs", appliedjobslist);
