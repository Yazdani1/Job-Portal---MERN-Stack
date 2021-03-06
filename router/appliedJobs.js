const router = require("express").Router();
const { requireLogin } = require("../middleware/auth");
require("dotenv").config();

const {
  appliedjobPost,
  myappliedjobspost,
  getappliedJoblist,
  removeAppliedjoblist
} = require("../controller/appliedJobs");

//applied jobs

router.post("/apply-job", requireLogin, appliedjobPost);

//to add applied job to applied job schema

router.post("/getmy-appliedjobs-list", requireLogin, myappliedjobspost);

//to get applied job list

router.get("/applied-jobs", requireLogin, getappliedJoblist);

//to delete applied jobs

router.delete("/remove-appliedjobslist/:id", requireLogin, removeAppliedjoblist);

module.exports = router;
