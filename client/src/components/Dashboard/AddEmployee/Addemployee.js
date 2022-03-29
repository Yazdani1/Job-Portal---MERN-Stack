import React, { useState } from "react";
import "./addemployee.css";
import { addEmployee } from "./apiAddemployee";

const Addemployee = () => {
  const [employername, setEmployername] = useState("");
  const [jobposition, setJobposition] = useState("");
  const [joineddate, setJoineddate] = useState("");

  const createEmployee = (e) => {
    e.preventDefault();

    addEmployee({})
      .then((result) => {
        if (result.error) {
        } else {
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <React.Fragment>
      <div className="container-fluid create-event-container">
        <div className="row">
          <div className="col-lg-10 col-md-12 col-sm-12">
            <div className="card event-form-design">
              <div className="text-center">
                <h5 className="text-center">Add Employee</h5>
              </div>

              <form>
                <div className="event-form">
                  <label for="exampleInputEmail1" className="form-label">
                    Employee Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                    maxLength="100"
                  />
                </div>

                <div className="event-form">
                  <label for="exampleInputEmail1" className="form-label">
                    Job Position
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                    maxLength="100"
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
    </React.Fragment>
  );
};

export default Addemployee;
