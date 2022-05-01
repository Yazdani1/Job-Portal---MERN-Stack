const router = require("express").Router();
require("dotenv").config();
const { requireLogin,isAdmin } = require("../middleware/auth");

const {
  updateUserRole,
  deleteUser,
  getUserAccountInfo,
} = require("../controller/admin");

//to update emplouer info

router.get("/getuser-account-info/:id", requireLogin,isAdmin, getUserAccountInfo);

router.put("/update-user-role/:id", requireLogin,isAdmin, updateUserRole);
router.delete("/delete-user/:id", requireLogin, deleteUser);

module.exports = router;
