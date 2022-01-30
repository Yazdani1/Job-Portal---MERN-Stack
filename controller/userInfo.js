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

//to get limited user list for home page

exports.getUserforhomepage = (req, res) => {
  User.find({})
    .limit(8)
    .sort({ createdAt: "DESC" })
    .then((userlimitlist) => {
      res.json(userlimitlist);
    })
    .catch((err) => {
      console.log(err);
    });
};
