const router = require("express").Router();
const { requireLogin } = require("../middleware/auth");
require("dotenv").config();

const { getuserInfo } = require("../controller/userInfo");

router.get("/all-user-list", getuserInfo);

module.exports = router;
