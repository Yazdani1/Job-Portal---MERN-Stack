const router = require("express").Router();
require("dotenv").config();
const { requireLogin } = require("../middleware/auth");

const { createemployer } = require("../controller/employer");

router.post("/create-employer", requireLogin, createemployer);

module.exports = router;
