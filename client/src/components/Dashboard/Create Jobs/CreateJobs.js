import "./reateJobs.css";
import { createjobPosts } from "./apiCreatejobs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "../../../../node_modules/react-toastify/dist/ReactToastify.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { UserContext } from "../../UserContext";

const CreateJobs = () => {
  const [state, setState] = useContext(UserContext);

  const history = useHistory();

  const [name, setName] = useState("");
  const [des, setDes] = useState("");
  const [city, setCity] = useState("");
  const [house, setHouse] = useState("");
  const [country, setCountry] = useState("");
  const [jobtypes, setJobtypes] = useState("Full-Time");
  const [requirements, setRequirements] = useState("");
  const [skills, setSkills] = useState("");

  // const [startdate, setStartdate] = useState(null);
  // const [enddate, setEnddate] = useState(null);

  const dataSubmit = (e) => {
    e.preventDefault();
    console.log("clcked");

    createjobPosts({
      name,
      des,
      city,
      house,
      country,
      jobtypes,
      requirements,
      skills,
    })
      .then((result) => {
        if (result.error) {
          toast.error(result.error, {
            position: toast.POSITION.TOP_RIGHT,
          });
        } else {
          toast.success("Post Created Successfully! ", {
            position: toast.POSITION.TOP_RIGHT,
          });

          setName("");
          setDes("");
          setCity("");
          setHouse("");
          setCountry("");
          setJobtypes("");
          setRequirements("");
          setSkills("");
        }
      })
      .catch((err) => {
        console.log("Error is here:" + err);
      });
  };

  return (
    <React.Fragment>
      <div className="container-fluid create-event-container">
        <div className="row">
          <div className="col-lg-10 col-md-12 col-sm-12">
            <div className="card event-form-design">
              <div className="text-center">
                <h5 className="text-center">Create Job</h5>
              </div>
              {/* <div
                className="alert alert-success"
                style={{ display: success ? "" : "none" }}
              >
                Your post has been posted Successfully!
              </div>
              <div
                className="alert alert-danger"
                style={{ display: error ? "" : "none" }}
              >
                {error}
              </div> */}
              <form>
                <div className="event-form">
                  <label for="exampleInputEmail1" className="form-label">
                    Job Title
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                    maxLength="100"
                  />
                </div>
                <p>{name ? name.length : 0}/100</p>

                <div className="event-form">
                  <label for="exampleInputEmail1" className="form-label">
                    Job types
                  </label>
                  <select
                    className="custom-select"
                    value={jobtypes}
                    onChange={(e) => setJobtypes(e.target.value)}
                  >
                    <option value="Full-Time">Full-Time</option>
                    <option value="Part-Time">Part-Time</option>
                    <option value="For Students">For Students</option>
                    <option value="Contract">Contract</option>
                  </select>
                </div>

                <div className="form-group">
                  <label for="exampleFormControlTextarea2">
                    Job description
                  </label>
                  <ReactQuill
                    class="ql-editor rounded-0"
                    value={des}
                    onChange={(e) => setDes(e)}
                  />
                </div>

                {/* job address */}

                <div className="even-start-end-date">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="event-form">
                        <label for="exampleInputEmail1" className="form-label">
                          City
                        </label>
                        <input
                          type="text"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          className="form-control"
                          maxLength="100"
                        />
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <div className="event-form">
                        <label for="exampleInputEmail1" className="form-label">
                          Office Address
                        </label>
                        <input
                          type="text"
                          value={house}
                          onChange={(e) => setHouse(e.target.value)}
                          className="form-control"
                          maxLength="100"
                        />
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <div className="event-form">
                        <label for="exampleInputEmail1" className="form-label">
                          Country
                        </label>
                        <input
                          type="text"
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                          className="form-control"
                          maxLength="100"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label for="exampleFormControlTextarea2">
                    Job Requirements
                  </label>
                  <ReactQuill
                    class="ql-editor rounded-0"
                    value={requirements}
                    onChange={(e) => setRequirements(e)}
                  />
                </div>

                <div className="form-group">
                  <label for="exampleFormControlTextarea2">Job Skills</label>
                  <ReactQuill
                    class="ql-skills rounded-0"
                    value={skills}
                    onChange={(e) => setSkills(e)}
                  />
                </div>

                <div class="form-group justify-content-center align-items-center">
                  <button
                    type="submit"
                    name="btnSubmit"
                    className="create-event-button"
                    onClick={dataSubmit}
                  >
                    Publish Job
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer autoClose={8000} />
    </React.Fragment>
  );
};

export default CreateJobs;
