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

//search user list

exports.searchUserlist = (req, res) => {
  let searchPattern = req.body.query;

  User.find({
    name: { $regex: searchPattern, $options: "i" },
  })
    .then((searchusers) => {
      res.json(searchusers);
    })
    .catch((err) => {
      console.log(err);
    });
};

//save job to wishlist

exports.savejobtoWishlist = (req, res) => {
  const { postID } = req.body;

  User.findByIdAndUpdate(req.user._id, {
    $addToSet: { wishlist: postID },
  }).exec((err, result) => {
    if (err) {
      return res.status(400).json({ error: err });
    } else {
      res.json(result);
    }
  });
};

//remove job from wishlist

exports.removejobfromWishlist = (req, res) => {
  const { postID } = req.body;

  User.findByIdAndUpdate(req.user._id, {
    $pull: { wishlist: postID },
  }).exec((err, result) => {
    if (err) {
      return res.status(400).json({ error: err });
    } else {
      res.json(result);
    }
  });
};

//get wishlist

exports.getjobWishlist = (req, res) => {
  User.findOne({ _id: req.user._id })
    .select("wishlist")
    .populate(
      "wishlist",
      "_id country requirements name des city house jobtypes date"
    )
    .then((wishlistjobpost) => {
      res.json(wishlistjobpost);
    })
    .catch((err) => {
      console.log(err);
    });
};
