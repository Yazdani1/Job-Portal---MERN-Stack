const User = require("../model/User");

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
