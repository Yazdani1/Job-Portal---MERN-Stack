const router = require("express").Router();
const { requireLogin } = require("../middleware/auth");
require("dotenv").config();

const { getuserInfo,getUserforhomepage } = require("../controller/userInfo");

router.get("/all-user-list", getuserInfo);

//user limit list for home page

router.get("/user-limit-list",getUserforhomepage)

module.exports = router;
