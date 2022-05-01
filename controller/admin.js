const User = require("../model/User");

//to get edit user info by user id

exports.getUserAccountInfo = (req, res) => {
  var editQuery = { _id: req.params.id };

  User.findOne(editQuery)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.updateUserRole = (req, res) => {
  const { role, name, email } = req.body;
  var updatequery = { _id: req.params.id };

  User.updateOne(updatequery, {
    $set: {
      role: role,
      name: name,
      email: email,
    },
  })
    .then((roleupdated) => {
      res.json(roleupdated);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deleteUser = (req, res) => {
  var deleteQuery = { _id: req.params.id };

  User.findByIdAndDelete(deleteQuery)
    .then((result) => {
      res.json(result);
    })
    .catch((er) => {
      console.log(err);
    });
};
