const Employer = require("../model/Employer");

//create employer api end point..

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

  Employer.create(saveemployer)
    .then((saveemployer) => {
      res.json(saveemployer);
    })
    .catch((err) => {
      console.log(err);
    });
};

//to get list of employer

exports.getemployerList = (req, res) => {
  Employer.find({})
    .sort({ date: "DESC" })
    .then((showemployerlist) => {
      res.json(showemployerlist);
    })
    .catch((err) => {
      console.log(err);
    });
};
