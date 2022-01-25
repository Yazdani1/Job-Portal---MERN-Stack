const JobPost = require("../model/JobPost");

const { requireLogin } = require("../middleware/auth");

exports.createjobPost = (req, res) => {
  const { name, des, city, house, country, jobtypes, requirements, skills } =
    req.body;

  if (!name) {
    return res.status(400).json({ error: "name is required" });
  }

  if (!des) {
    return res.status(400).json({ error: "des is required.." });
  }
  if (!city) {
    return res.status(400).json({ error: "city is required.." });
  }

  if (!house) {
    return res.status(400).json({ error: "house is required.." });
  }

  if (!country) {
    return res.status(400).json({ error: "country is required.." });
  }

  if (!jobtypes) {
    return res.status(400).json({ error: "job type is required.." });
  }

  if (!requirements) {
    return res.status(400).json({ error: "requirement is required.." });
  }

  if (!skills) {
    return res.status(400).json({ error: "skill is required.." });
  }

  const savejobPost = new JobPost({
    name,
    des,
    city,
    house,
    country,
    jobtypes,
    requirements,
    skills,
    postedBy: req.user,
  });

  JobPost.create(savejobPost)
    .then((jobpostData) => {
      res.json(jobpostData);
    })
    .catch((err) => {
      console.log(err);
    });
};

//get my job posts

exports.getmyJobposts = (req, res) => {
  JobPost.find({ postedBy: req.user._id })
    .sort({ date: "DESC" })
    .populate("postedBy", "_id name email photo")
    .populate("application.postedBy", "_id name email photo")
    .populate(
      "application",
      "name des location eventtypes startdate enddate date maxmembers"
    )
    .then((mypublishedjobs) => {
      res.json(mypublishedjobs);
    })
    .catch((err) => {
      console.log(err);
    });
};

//delete my jobs

exports.deleteMyjobposts = (req,res)=>{

  var deletequery = { _id: req.params.id };
  JobPost.findByIdAndDelete(deletequery)
    .then((deleteEvents) => {
      res.json(deleteEvents);
    })
    .catch((err) => {
      console.log(err);
    });

}

//get all job posts for home page

exports.getallJobposts = (req, res) => {
  JobPost.find({})
    .sort({ date: "DESC" })
    .populate("postedBy", "_id name email photo")
    .populate("application.postedBy", "_id name email photo")
    .populate(
      "application",
      "name des location eventtypes startdate enddate date maxmembers"
    )
    .then((mypublishedjobs) => {
      res.json(mypublishedjobs);
    })
    .catch((err) => {
      console.log(err);
    });
};
