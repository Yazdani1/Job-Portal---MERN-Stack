const router = require("express").Router();
const { requireLogin } = require("../middleware/auth");
require("dotenv").config();

const {
  getuserInfo,
  getUserforhomepage,
  searchUserlist,
  savejobtoWishlist,
  removejobfromWishlist,
  getjobWishlist,
} = require("../controller/userInfo");

router.get("/all-user-list", getuserInfo);

//user limit list for home page

router.get("/user-limit-list", getUserforhomepage);

//search users list....

router.post("/search-users", searchUserlist);

//save job to user wishlist

router.put("/job-wishlist", requireLogin, savejobtoWishlist);

router.put("/remove-job-wishlist", requireLogin, removejobfromWishlist);

router.get("/get-job-wishlist", requireLogin, getjobWishlist);

module.exports = router;
