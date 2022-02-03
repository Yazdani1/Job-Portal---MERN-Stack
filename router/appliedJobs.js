const router = require("express").Router();
const { requireLogin } = require("../middleware/auth");
require("dotenv").config();

const { appliedjobPost,myappliedjobspost } = require("../controller/appliedJobs");


//applied jobs

router.post("/apply-job", requireLogin, appliedjobPost);

//to add applied job to applied job schema

router.post("/getmy-appliedjobs-list",requireLogin, myappliedjobspost);


module.exports = router;
