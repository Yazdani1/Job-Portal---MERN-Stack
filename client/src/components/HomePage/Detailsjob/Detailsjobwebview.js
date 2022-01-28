import "./detailsjob.css";
import React, { useEffect, useState, useContext } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import moment from "moment";
import ReactHtmlParser from "react-html-parser";
import { FcOk, FcCollapse, FcExpand, FcNightPortrait } from "react-icons/fc";
import { FcApproval } from "react-icons/fc";
import { SyncOutlined } from "@ant-design/icons";
import { Spin, Space } from "antd";
import { MdLocationPin } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";

const Detailsjobwebview = ({
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
  //details post collapse option state

  const [show, setShow] = useState(true);
  const [showskills, setShowskills] = useState(true);
  const [showsaddress, setShowsaddress] = useState(false);

  return (
    <React.Fragment>
      <div className="job-details-page">
        {/* job company header */}
        <div className="card job-company-info">
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
                <p>
                
                  {moment(date).format("MMM Do YY")}
                </p>
              </div>
              {totalapplications >= 5 ? (
                    <p className="trending">Trending</p>
                  ) : null}
            </div>
          {/* </Link> */}
          <h6>{name}</h6>
          <div className="row">
            <div className="col-lg-3">
              <p className="job-items">
                <FcApproval size={20} style={{ color: "red" }} />
                {jobtypes}
              </p>
            </div>
            <div className="col-lg-3">
              <p className="job-items">
                <FcNightPortrait size={20} style={{ color: "red" }} />
                {totalapplications} applicants
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
                <MdLocationPin size={20} style={{ color: "blue" }} />
                {city}
              </p>
            </div>
          </div>
        </div>

        <div className="card job-description">
          <h6>Description</h6>
          <p>{ReactHtmlParser(des)}</p>
        </div>

        {/* job requirements */}
        <div className="card job-requirements">
          <div className="job-items-collapse-option">
            <h6>Requirements</h6>

            {show ? (
              <p
                className="collapse-icon-design"
                onClick={() => setShow(!show)}
              >
                <FcCollapse size={20} />
              </p>
            ) : (
              <p
                className="collapse-icon-design"
                onClick={() => setShow(!show)}
              >
                <FcExpand size={20} />
              </p>
            )}
          </div>
          {show ? <p>{ReactHtmlParser(requirements)}</p> : null}
        </div>

        {/* skills */}
        <div className="card job-skills">
          <div className="job-items-collapse-option">
            <h6>Skills</h6>

            {showskills ? (
              <p
                className="collapse-icon-design"
                onClick={() => setShowskills(!showskills)}
              >
                <FcCollapse size={20} />
              </p>
            ) : (
              <p
                className="collapse-icon-design"
                onClick={() => setShowskills(!showskills)}
              >
                <FcExpand size={20} />
              </p>
            )}
          </div>

          {showskills ? <p>{ReactHtmlParser(skills)}</p> : null}
        </div>

        {/* job address */}

        <div className="card job-company-address">
          <div className="job-items-collapse-option">
            <h6>Address</h6>

            {showsaddress ? (
              <p
                className="collapse-icon-design"
                onClick={() => setShowsaddress(!showsaddress)}
              >
                <FcCollapse size={20} />
              </p>
            ) : (
              <p
                className="collapse-icon-design"
                onClick={() => setShowsaddress(!showsaddress)}
              >
                <FcExpand size={20} />
              </p>
            )}
          </div>

          {showsaddress ? (
            <>
              <p>{house}</p>
              <p>{city}</p>
              <p>{country}</p>
            </>
          ) : null}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Detailsjobwebview;
