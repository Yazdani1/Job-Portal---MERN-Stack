const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    about: {
      type: String,
    },

    wishlist: [
      {
        type: ObjectId,
        ref: "Jobposts",
      },
    ],

    photo: {
      type: String,
    },
    role:{
      type: String,
      default: "Subscriber"
    },

    message: [
      {
        name: String,
        email: String,
        textmessage: String,
        postedBy: { type: ObjectId, ref: "User" },
        date: {
          type: Date,
          default: Date.now,
        },
      },
    ],

    resetToken: String,
    expireToken: Date,
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", userSchema);
