const router = require("express").Router();
const { requireLogin } = require("../middleware/auth");
require("dotenv").config();

const { createjobPost, getmyJobposts,getallJobposts } = require("../controller/createJobs");

//employer published jobs
router.post("/create-job-post", requireLogin, createjobPost);
router.get("/get-my-jobposts", requireLogin, getmyJobposts);

//get all job posts for home page
router.get("/getall-jobposts", getallJobposts);

module.exports = router;
