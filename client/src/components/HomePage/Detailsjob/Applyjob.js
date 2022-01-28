import React, { useEffect, useState, useContext } from "react";
import "./applyjob.css";
import { applytothisjobs, myappliedjobs } from "./apiDetails";
import { ToastContainer, toast } from "react-toastify";
import { Link, useHistory, useParams } from "react-router-dom";

const Applyjob = ({ jobId }) => {
  const { id } = useParams();

  const history = useHistory();

  const [detailsjob, setDetailsjob] = useState([]);
  //apply job state

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [yearofexperience, setYearofexperience] = useState("");
  const [workexperience, setWorkexperience] = useState("");
  const [skills, setSkills] = useState("");
  const [projects, setProjects] = useState("");

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const nameChange = (e) => {
    setError("");
    setName(e.target.value);
  };

  const emailChange = (e) => {
    setError("");
    setEmail(e.target.value);
  };

  const yearofexperienceChange = (e) => {
    setError("");
    setYearofexperience(e.target.value);
  };

  const workexperienceChange = (e) => {
    setError("");
    setWorkexperience(e.target.value);
  };

  const skillsChange = (e) => {
    setError("");
    setSkills(e.target.value);
  };

  const projectsChange = (e) => {
    setError("");
    setProjects(e.target.value);
  };

  const applyforjob = (e, jobId) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    applytothisjobs({
      name,
      email,
      yearofexperience,
      workexperience,
      skills,
      projects,
      jobId,
    })
      .then((result) => {
        if (result.error) {
          setError(result.error);
          console.log(result);
        } else {
          setError("");
          setSuccess(true);
          toast.success("You have successfully applied for this job", {
            position: toast.POSITION.TOP_RIGHT,
          });
          console.log(result);

          setName("");
          setEmail("");
          setYearofexperience("");
          setWorkexperience("");
          setSkills("");
          setProjects("");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //to save the job have applied in the user profile..

  const myappliedjobslist = (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    myappliedjobs({
      name,
      email,
      yearofexperience,
      workexperience,
      skills,
      projects,
    })
      .then((result) => {
        if (result.error) {
          setError(result.error);
          console.log(result);
        } else {
          setError("");
          setSuccess(true);
          // toast.success("Your applied job has saved to your profile", {
          //   position: toast.POSITION.TOP_RIGHT,
          // });
          console.log(result);

          setName("");
          setEmail("");
          setYearofexperience("");
          setWorkexperience("");
          setSkills("");
          setProjects("");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const loadDetailsjobpost = () => {
  //   getdetailsJob(id)
  //     .then((result) => {
  //       setDetailsjob(result);
  //       console.log(result);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // useEffect(() => {
  //   loadDetailsjobpost();
  // }, [detailsjob]);

  const showError = () => (
    <div
      className="alert alert-danger"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );

  return (
    <React.Fragment>
      <div className="card event-form-designs">
        <div className="text-center">
          <h5 className="text-center">Apply for this Job</h5>
          <p>{detailsjob && detailsjob.jobdetails?._id}</p>
        </div>

        {showError()}

        <form>
          <div className="event-form">
            <label for="exampleInputEmail1" className="form-label">
              Your name
            </label>
            <input
              type="text"
              value={name}
              onChange={nameChange}
              className="form-control"
              maxLength="100"
            />
          </div>

          <div className="event-form">
            <label for="exampleInputEmail1" className="form-label">
              Your E-mail
            </label>
            <input
              type="text"
              value={email}
              onChange={emailChange}
              className="form-control"
              maxLength="100"
            />
          </div>

          <div className="event-form">
            <label for="exampleInputEmail1" className="form-label">
              Year of experience
            </label>
            <select
              className="custom-select"
              value={yearofexperience}
              onChange={yearofexperienceChange}
            >
              <option value="0-6 months">0-6 months</option>
              <option value="1-2 years">1-2 years</option>
              <option value="2-4 years">2-4 years</option>
              <option value="4+ years">4+ years</option>
            </select>
          </div>

          <div className="event-form">
            <label for="exampleInputEmail1" className="form-label">
              Work-experience
            </label>
            <textarea
              type="text"
              value={workexperience}
              onChange={workexperienceChange}
              className="form-control"
              rows={3}
            />
          </div>
          <div className="event-form">
            <label for="exampleInputEmail1" className="form-label">
              Skills
            </label>
            <textarea
              type="text"
              value={skills}
              onChange={skillsChange}
              className="form-control"
              rows={3}
            />
          </div>
          <div className="event-form">
            <label for="exampleInputEmail1" className="form-label">
              Projects (Optional)
            </label>
            <textarea
              type="text"
              value={projects}
              onChange={projectsChange}
              className="form-control"
              rows={3}
            />
          </div>
          <div className="main_container-button">
            <button
              className="apply-job-button"
              onClick={(e) =>
                // applyforjob(e, detailsjob && detailsjob.jobdetails?._id)
                {
                  if (!window.localStorage.getItem("tokenLogin")) {
                    history.push("/signin");
                  } else {
                    applyforjob(e, jobId);
                    myappliedjobslist(e);
                  }
                }
              }
            >
              Apply Job
            </button>
          </div>
        </form>
      </div>
      <ToastContainer autoClose={8000} />
    </React.Fragment>
  );
};

export default Applyjob;
