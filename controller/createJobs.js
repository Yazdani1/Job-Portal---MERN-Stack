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

//get my job posts in admin side

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

//delete my jobs from admin side

exports.deleteMyjobposts = (req, res) => {
  var deletequery = { _id: req.params.id };
  JobPost.findByIdAndDelete(deletequery)
    .then((deleteEvents) => {
      res.json(deleteEvents);
    })
    .catch((err) => {
      console.log(err);
    });
};

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

//get trending job post based on the number of job application list
//
// JobPost.find({ application: { $size: 7 } })
// JobPost.find({
//   application: { $exists: true },
//   $where: "this.application.length>1",
// })
exports.getTrendingjobpost = (req, res) => {
  JobPost.find({ application: { $gt: { $size: 1 } } })
    .populate("postedBy", "_id name email photo")
    .populate("application.postedBy", "_id name email photo")
    .populate(
      "application",
      "name des location eventtypes startdate enddate date maxmembers"
    )
    .then((trendingjobresult) => {
      res.json(trendingjobresult);
    })
    .catch((err) => {
      console.log(err);
    });
};

//search jobs in the home page api end point

exports.searchJobpost = (req, res) => {
  let searchPattern = req.body.query;

  JobPost.find({
    name: { $regex: searchPattern, $options: "i" },
  })
    .populate("postedBy", "_id name email photo")
    .then((jobsearch) => {
      res.json(jobsearch);
    })
    .catch((err) => {
      console.log(err);
    });
};

//details job posts for home page

exports.jobdetailsDescription = (req, res) => {
  var detailsquery = { _id: req.params.id };

  JobPost.findOne(detailsquery)
    .populate("postedBy", "_id name photo")
    .populate("application.postedBy", "_id name email photo")
    .then((jobdetails) => {
      JobPost.find({ _id: { $ne: detailsquery } })
        .sort({ date: "DESC" })
        .limit(6)
        .populate("postedBy", "_id name email photo")
        .populate("application.postedBy", "_id name email photo")
        .exec((err, morejobs) => {
          if (err) {
            return res.status(400).json({ error: err });
          }
          res.json({ jobdetails, morejobs });
        })
        .catch((err) => {
          return res.status(404).json({ error: err });
        });
    })
    .catch((err) => {
      console.log(err);
    });
};

//to get job application list for each job post

exports.jobapplicationList = (req, res) => {
  var detailsquery = { _id: req.params.id };

  JobPost.findOne(detailsquery)
    .populate("postedBy", "_id name photo")
    .populate("application.postedBy", "_id name email photo")
    .then((jobdetails) => {
      res.json(jobdetails);
    })
    .catch((err) => {
      console.log(err);
    });
};

//to get post info in the edit field

exports.getEditpostinfo = (req, res) => {
  var editinfoquery = { _id: req.params.id };

  JobPost.findOne(editinfoquery)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

//to update post edit info.

exports.updateEditpostinfo = (req, res) => {
  var updatequery = { _id: req.params.id };

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

  JobPost.updateOne(updatequery, {
    $set: {
      name: name,
      des: des,
      city: city,
      house: house,
      country: country,
      jobtypes: jobtypes,
      requirements: requirements,
      skills: skills,
      postedBy: req.user,
    },
  })
    .then((editinfo) => {
      res.json(editinfo);
    })
    .catch((err) => {
      console.log(err);
    });
};
