const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const employerschema = mongoose.Schema({
  postedBy: {
    type: ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Employerlist", employerschema);
