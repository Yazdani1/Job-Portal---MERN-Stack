const Jobs = require("../model/Jobs");

exports.createjobPost = (req, res) => {
  const { title, des, city, house, country, jobtypes, requirements, skills } =
    req.body;

  const jobposts = Jobs({
    title,
    des,
    city,
    house,
    country,
    jobtypes,
    requirements,
    skills,
    postedBy: req.user,
  });

  Jobs.create(jobposts)
    .then((result) => {
      res.json({ result, message: "Job Published" });
    })
    .catch((err) => {
      console.log(err);
    });
};
