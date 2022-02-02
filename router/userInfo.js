const router = require("express").Router();
const { requireLogin } = require("../middleware/auth");
require("dotenv").config();

const { getuserInfo, getUserforhomepage,searchUserlist } = require("../controller/userInfo");

router.get("/all-user-list", getuserInfo);

//user limit list for home page

router.get("/user-limit-list", getUserforhomepage);

//search users list....

router.post("/search-users", searchUserlist);

module.exports = router;
