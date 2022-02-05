const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const appliedjobslist = mongoose.Schema({

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
module.exports = mongoose.model("Wishlist", appliedjobslist);
