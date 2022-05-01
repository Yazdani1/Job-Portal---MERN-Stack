const jwt = require("jsonwebtoken");
const User = require("../model/User");
//for token

exports.requireLogin = (req, res, next) => {
  try {
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(" ")[1];
      const decode = jwt.verify(token, process.env.JWT_SECRET);

      //aatach tokemnn
      req.user = decode;
      next();
    } else {
      return res.status(400).json({ message: "Unauthorized" });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.isAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    if (user.role != "Admin") {
      return res.status(400).send("Unauthorized");
    } else {
      next();
    }
  } catch {}
};
