const router = require("express").Router();
const { requireLogin,isAdmin } = require("../middleware/auth");
require("dotenv").config();

const {
  userRegistration,
  userLogin,
  passwordReset,
  newPassword,currentUser
} = require("../controller/userauth");

//Userauth

router.post("/register", userRegistration);

router.post("/login", userLogin);

router.post("/reset-password", passwordReset);

router.post("/new-password", newPassword);
//end user auth
//current uer id

router.get("/admin/current-user",requireLogin,isAdmin,currentUser);

module.exports = router;
