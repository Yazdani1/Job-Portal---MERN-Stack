const router = require("express").Router();
require("dotenv").config();
const { requireLogin } = require("../middleware/auth");

const { createemployer, getemployerList } = require("../controller/employer");

//to create employer list
router.post("/create-employer", requireLogin, createemployer);

//to get list of employer

router.get("/get-employerlist", requireLogin, getemployerList);

module.exports = router;
