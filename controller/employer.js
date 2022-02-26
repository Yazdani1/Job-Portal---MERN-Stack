const Employer = require("../model/Employer");

exports.createemployer = (req, res) => {
  const { employername, jobposition, joineddate } = req.body;

  if (!employername) {
    return res.status(400).json({ error: "Please add your employeer name" });
  }

  if (!jobposition) {
    return res
      .status(400)
      .json({ error: "Please add your employeer job position" });
  }
  if (!joineddate) {
    return res
      .status(400)
      .json({ error: "Please add your employeer joined date" });
  }

  const saveemployer = new Employer({
    employername,
    jobposition,
    joineddate,
    postedBy: req.user,
  });
};
