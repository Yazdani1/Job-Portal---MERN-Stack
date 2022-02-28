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

//to delete employer

exports.deleteEmployer = (req, res) => {
  var deletequery = { _id: req.params.id };

  Employer.findByIdAndDelete(deletequery)
    .then((deletemployer) => {
      res.json(deletemployer);
    })
    .catch((err) => {
      console.log(err);
    });
};

//to get edit employer info

exports.geteditEmployerinfo = (req, res) => {
  var editquery = { _id: req.params.id };

  Employer.findOne(editquery)
    .then((editdata) => {
      res.json(editdata);
    })
    .catch((err) => {
      console.log(err);
    });
};

//to update employeer info

exports.updateEmployerinfo = (req, res) => {
  var updateQuery = { _id: req.params.id };

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
};
