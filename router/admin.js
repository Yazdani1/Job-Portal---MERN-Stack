const router = require("express").Router();
require("dotenv").config();
const { requireLogin } = require("../middleware/auth");

const {
  updateUserRole,
  deleteUser,
  getUserAccountInfo,
} = require("../controller/admin");

//to update emplouer info

router.get("/getuser-account-info/:id", requireLogin, getUserAccountInfo);

router.put("/update-user-role/:id", requireLogin, updateUserRole);
router.delete("/delete-user/:id", requireLogin, deleteUser);

module.exports = router;
