const router = require("express").Router();
require("dotenv").config();
const { requireLogin } = require("../middleware/auth");

const {
  createemployer,
  getemployerList,
  deleteEmployer,
  geteditEmployerinfo
} = require("../controller/employer");

//to create employer list
router.post("/create-employer", requireLogin, createemployer);

//to get list of employer

router.get("/get-employerlist", requireLogin, getemployerList);

//to delete employer

router.delete("/delete-employer/:id", requireLogin, deleteEmployer);
//to get edit employer info

router.get("/get-edit-employer/:id", requireLogin, geteditEmployerinfo);

module.exports = router;
