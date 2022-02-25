const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const employerschema = mongoose.Schema({
  employername: {
    type: String,
  },
  jobposition: {
    type: String,
  },
  joineddate: {
    type: String,
  },
  postedBy: {
    type: ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Employerlist", employerschema);
