const router = require("express").Router();
const { requireLogin } = require("../middleware/auth");
require("dotenv").config();

const { createjobPost } = require("../controller/createJobs");

router.post = ("/create-job-post", requireLogin, createjobPost);

module.exports = router;
