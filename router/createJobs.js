const router = require("express").Router();
const { requireLogin } = require("../middleware/auth");
require("dotenv").config();

const { createjobPost, getmyJobposts,getallJobposts } = require("../controller/createJobs");

router.post("/create-job-post", requireLogin, createjobPost);
router.get("/get-my-jobposts", requireLogin, getmyJobposts);

//get all jobposts
router.get("/getall-jobposts", getallJobposts);

module.exports = router;
