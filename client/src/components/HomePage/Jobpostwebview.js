import React from "react";
import "./jobpost.css";
import moment from "moment";
import { Link, useHistory, useParams } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import { MdLocationPin } from "react-icons/md";
import { FcApproval, FcNightPortrait,FcBookmark } from "react-icons/fc";

const Jobpostwebview = ({
  name,
  des,
  city,
  house,
  country,
  jobtypes,
  requirements,
  skills,
  date,
  photo,
  username,
  userid,
  postid,
  totalapplications,
}) => {
  return (
    <React.Fragment>
      <div className="large-screen-allevent-views">
        <div className="card all-events">
          {/* <Link
            to={"/organizers-public-profile/" + userid}
            style={{ textDecoration: "none" }}
          > */}
            <div className="profile-name-date">
              {photo ? (
                <div className="profile-name-avatar-image">
                  <img src={photo} />
                </div>
              ) : (
                <div className="profile-name-avatar">
                  <p>{username?.substring(0, 2).toUpperCase()}</p>
                </div>
              )}

              <div className="profile-name-post-date">
                <p className="profile-name-size">{username}</p>
                <p>{moment(date).format("MMM Do YY")}</p>
              </div>
              {totalapplications >= 5 ? (
                    <p className="trending">Trending</p>
                  ) : null}
            </div>
          {/* </Link> */}

          <Link
            to={"/job-description/" + postid}
            style={{ textDecoration: "none", color: "black" }}
          >
            <h6>{name}</h6>
            <p>{ReactHtmlParser(des?.substring(0, 150))}</p>
          </Link>
          <div className="row">
            <div className="col-lg-3">
              <p className="job-items">
                <FcApproval size={20} style={{ color: "red" }} />
                {jobtypes}
              </p>
            </div>
            <div className="col-lg-3">
              <p className="job-items">
                <MdLocationPin size={20} style={{ color: "red" }} />
                {country}
              </p>
            </div>
            <div className="col-lg-3">
              <p className="job-items">
                <FcBookmark size={20} style={{ color: "red" }} /> Save
                
              </p>
            </div>
            <div className="col-lg-3">
              <p className="job-items">
                <FcNightPortrait size={20} style={{ color: "red" }} />
                {totalapplications} applicants
              </p>
            </div>
          </div>

          
        </div>
      </div>
    </React.Fragment>
  );
};
export default Jobpostwebview;
