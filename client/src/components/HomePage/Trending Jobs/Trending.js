import React from "react";
import "./trendingjob.css";
import { FcApproval, FcNightPortrait, FcBookmark } from "react-icons/fc";
import moment from "moment";
import { Link, useHistory, useParams } from "react-router-dom";

const Trending = ({
  photo,
  username,
  date,
  name,
  jobtypes,
  application,
  postid,
}) => {
  return (
    <React.Fragment>
      <Link
        to={"/job-description/" + postid}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div className="trending-job-item">
          <div className="trending-tag-userinfo">
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
            </div>
            <p className="trending-tag">Trending</p>
          </div>

          <p className="profile-name-size">{username}</p>


          <p>Published on: {moment(date).format("MMM Do YY")}</p>

          <h6>{name.substring(0, 50)}</h6>

          <p className="job-items">
            <FcApproval size={18} style={{ color: "red" }} />
            {jobtypes}
          </p>
          <p className="job-items">
            <FcNightPortrait size={20} style={{ color: "red" }} />
            {application} applicants
          </p>
        </div>
      </Link>
    </React.Fragment>
  );
};

{
  /* <div className="trending-job-item">
  <div className="profile-name-date">
    {item?.postedBy?.photo ? (
      <div className="profile-name-avatar-image">
        <img src={item?.postedBy?.photo} />
      </div>
    ) : (
      <div className="profile-name-avatar">
        <p>{item.postedBy?.name.substring(0, 2).toUpperCase()}</p>
      </div>
    )}

    <div className="profile-name-post-date">
      <p className="profile-name-size">{item.postedBy?.name}</p>
    </div>

    <p className="trending">Trending</p>
  </div>
  <p>Published on: {moment(item.date).format("MMM Do YY")}</p>

  <h6>{item.name.substring(0, 50)}</h6>

  <p className="job-items">
    <FcApproval size={18} style={{ color: "red" }} />
    {item.jobtypes}
  </p>
  <p className="job-items">
    <FcNightPortrait size={20} style={{ color: "red" }} />
    {item.application.length} applicants
  </p>
</div>; */
}

export default Trending;
