const router = require("express").Router();
const { requireLogin } = require("../middleware/auth");
require("dotenv").config();

const { appliedjobPost } = require("../controller/appliedJobs");


//applied jobs

router.post("/apply-job", requireLogin, appliedjobPost);


module.exports = router;
