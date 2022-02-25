const Employer = require("../model/Employer");

exports.createemployer = (req, res) => {
  const { employername, jobposition, joineddate } = req.body;

  if (!employername) {
    return res.status(400).json({ error: "Please add your employer name" });
  }
};
