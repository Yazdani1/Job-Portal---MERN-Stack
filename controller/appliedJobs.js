const JobPost = require("../model/JobPost");
const { requireLogin } = require("../middleware/auth");
const AppliedJob = require("../model/AppliedJob");

//applied jobs

exports.appliedjobPost = (req, res) => {
  const { name, email, yearofexperience, workexperience, skills, projects } =
    req.body;

  const applyjobs = {
    name,
    email,
    yearofexperience,
    workexperience,
    skills,
    projects,
    postedBy: req.user._id,
  };

  if (!name) {
    return res.status(400).json({ error: "your name is required" });
  }

  if (!email) {
    return res.status(400).json({ error: "your e-mail is required" });
  }
  if (!yearofexperience) {
    return res.status(400).json({ error: "year of experience is required" });
  }
  if (!workexperience) {
    return res.status(400).json({ error: "work experience is required" });
  }

  if (!skills) {
    return res.status(400).json({ error: "skills is required" });
  }

  JobPost.findByIdAndUpdate(
    req.body.jobId,
    {
      $push: { application: applyjobs },
    },
    {
      new: true,
    }
  )
    .populate("application.postedBy", "_id name photo")
    .populate("postedBy", "_id name photo")
    .exec((err, result) => {
      if (err) {
        return res.status(422).json({ error: err });
      } else {
        res.json(result);
      }
    });
};

//my applied jobs list

exports.myappliedjobspost = (req, res) => {
  const { name, email, yearofexperience, workexperience, skills, projects } =
    req.body;

  const applyjobs = {
    name,
    email,
    yearofexperience,
    workexperience,
    skills,
    projects,
    postedBy: req.user._id,
  };

  if (!name) {
    return res.status(400).json({ error: "your name is required" });
  }

  if (!email) {
    return res.status(400).json({ error: "your e-mail is required" });
  }
  if (!yearofexperience) {
    return res.status(400).json({ error: "year of experience is required" });
  }
  if (!workexperience) {
    return res.status(400).json({ error: "work experience is required" });
  }

  if (!skills) {
    return res.status(400).json({ error: "skills is required" });
  }

  AppliedJob.create(applyjobs)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
