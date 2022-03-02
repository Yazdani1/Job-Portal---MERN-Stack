const router = require("express").Router();
require("dotenv").config();
const { requireLogin } = require("../middleware/auth");

const {
  createemploye,
  getemployerList,
  deleteEmployer,
  geteditEmployerinfo,
  updateEmployerinfo,
} = require("../controller/employer");

//to create employer list
router.post("/create-employe", requireLogin, createemploye);

//to get list of employer

router.get("/get-employerlist", requireLogin, getemployerList);

//to delete employer

router.delete("/delete-employer/:id", requireLogin, deleteEmployer);
//to get edit employer info

router.get("/get-edit-employer/:id", requireLogin, geteditEmployerinfo);

//to update emplouer info

router.put("/update-employer-info/:id", requireLogin, updateEmployerinfo);

module.exports = router;
