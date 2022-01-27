import React from "react";
import "./applyjob.css";

const Applyjob = () => {
  return (
    <React.Fragment>
      <div className="card event-form-designs">
        <div className="text-center">
          <h5 className="text-center">Join this Event</h5>
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
              Number of participants
            </label>
            <input
              type="number"
              //   value={participants}
              //   onChange={participantsChange}
              className="form-control"
              maxLength="100"
            />
          </div>
          <div className="event-form">
            <label for="exampleInputEmail1" className="form-label">
              Message(optional)
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
