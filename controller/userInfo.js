const User = require("../model/User");

//to get all user from database
exports.getuserInfo = (req, res) => {
  User.find({})
    .sort({ date: "DESC" })
    .then((userinfo) => {
      res.json(userinfo);
    })
    .catch((err) => {
      console.log(err);
    });
};

//to get limited user list for home page

exports.getUserforhomepage = (req, res) => {
  User.find({})
    .limit(8)
    .select("-password")
    .sort({ createdAt: "DESC" })
    .then((userlimitlist) => {
      res.json(userlimitlist);
    })
    .catch((err) => {
      console.log(err);
    });
};
