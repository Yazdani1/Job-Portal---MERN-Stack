import React from "react";
import "./applyjob.css";

const Applyjob = () => {
  return (
    <React.Fragment>
      <div className="card event-form-designs">
        <div className="text-center">
          <h5 className="text-center">Apply for this Job</h5>
        </div>

        {/* {showError()} */}

        <form>
          <div className="event-form">
            <label for="exampleInputEmail1" className="form-label">
              Your name
            </label>
            <input
              type="text"
              //   value={name}
              //   onChange={nameChange}
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
              //   value={email}
              //   onChange={emailChange}
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
              //   value={jobtypes}
              //   onChange={(e) => setJobtypes(e.target.value)}
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
              type="number"
              //   value={message}
              //   onChange={messageChange}
              className="form-control"
              rows={3}
            />
          </div>
          <div className="event-form">
            <label for="exampleInputEmail1" className="form-label">
              Skills
            </label>
            <textarea
              type="number"
              //   value={message}
              //   onChange={messageChange}
              className="form-control"
              rows={3}
            />
          </div>
          <div className="event-form">
            <label for="exampleInputEmail1" className="form-label">
              Projects (Optional)
            </label>
            <textarea
              type="number"
              //   value={message}
              //   onChange={messageChange}
              className="form-control"
              rows={3}
            />
          </div>
          <div className="main_container-button">
            <button className="apply-job-button">Apply Job</button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Applyjob;
