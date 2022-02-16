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

//to add applied job to applied job schema

exports.myappliedjobspost = (req, res) => {
  const {
    name,
    email,
    yearofexperience,
    workexperience,
    skills,
    projects,
    jobID,
  } = req.body;

  const applyjobs = {
    name,
    email,
    yearofexperience,
    workexperience,
    skills,
    projects,
    postedBy: req.user._id,
    jobpost: jobID,
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

//get applied job lists

exports.getappliedJoblist = (req, res) => {
  AppliedJob.find({ postedBy: req.user._id })
    .sort({ date: "DESC" })
    .populate("postedBy", "_id name email photo")
    .populate("jobpost", "_id country requirements name des city house jobtypes date")
    .then((myappliedjobs) => {
      res.json(myappliedjobs);
    })
    .catch((err) => {
      console.log(err);
    });
};


//remove applied jobs list

exports.removeAppliedjoblist = (req,res)=>{

  

}



