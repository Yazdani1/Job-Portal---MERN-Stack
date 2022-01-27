const router = require("express").Router();
const { requireLogin } = require("../middleware/auth");
require("dotenv").config();

const { appliedjobPost } = require("../controller/appliedJobs");

//apply job posts
router.post = ("/apply-job", requireLogin, appliedjobPost);

module.exports = router;
