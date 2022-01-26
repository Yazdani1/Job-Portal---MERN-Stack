const router = require("express").Router();
const { requireLogin } = require("../middleware/auth");
require("dotenv").config();

const {
  createjobPost,
  getmyJobposts,
  getallJobposts,
  deleteMyjobposts,
  searchJobpost,
} = require("../controller/createJobs");

//employer published jobs
router.post("/create-job-post", requireLogin, createjobPost);
router.get("/get-my-jobposts", requireLogin, getmyJobposts);

//employer delete job posts

router.delete("/delete-myjob-posts/:id", requireLogin, deleteMyjobposts);

//get all job posts for home page
router.get("/getall-jobposts", getallJobposts);

//search job posts in the home page

router.post("/search-jobs", searchJobpost);

//details job posts

router.get("/job-description/:id", jobdetailsDescription);

module.exports = router;
