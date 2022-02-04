import React, { useContext, useEffect, useState } from "react";
import ReactTooltip from "react-tooltip";
import { GiSkills } from "react-icons/gi";
import { getjobapplicationList } from "./apiPublishedjobs";
import moment from "moment";
import { MdCardMembership } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import { MdDelete } from "react-icons/md";
import { AiTwotoneEdit } from "react-icons/ai";
import { SyncOutlined } from "@ant-design/icons";
import { Link, useHistory, useParams } from "react-router-dom";
import { SiMicrodotblog } from "react-icons/si";
import { AiFillMessage } from "react-icons/ai";
import { FaUserGraduate } from "react-icons/fa";
import { FcComboChart, FcFilledFilter } from "react-icons/fc";
import { EyeOutlined } from "@ant-design/icons";
import ReactHtmlParser from "react-html-parser";
import { HiHand } from "react-icons/hi";
import "./jobapplication.css";
import Jobpostwebview from "../../HomePage/Jobpostwebview";
import {
  FcOk,
  FcCollapse,
  FcExpand,
  FcNightPortrait,
  FcNext,
} from "react-icons/fc";

const JobapplicationList = () => {
  const { id } = useParams();

  const [jobapplication, setJobapplication] = useState([]);
  const [show, setShow] = useState(true);

  //loding state
  const [loading, setLoading] = useState(true);

  const loadJobapplication = () => {
    getjobapplicationList(id)
      .then((result) => {
        setJobapplication(result);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadJobapplication();
  }, []);

  if (loading) {
    return (
      <div class="text-center my-25">
        <h1>
          <SyncOutlined spin />
        </h1>
      </div>
    );
  }

  return (
    <React.Fragment>
      <div className="container">
        <Jobpostwebview
          name={jobapplication && jobapplication.name}
          userid={jobapplication && jobapplication.postedBy?._id}
          photo={jobapplication && jobapplication?.postedBy?.photo}
          username={jobapplication && jobapplication?.postedBy?.name}
          postid={jobapplication && jobapplication._id}
          date={jobapplication && jobapplication.date}
          jobtypes={jobapplication && jobapplication.jobtypes}
          country={jobapplication && jobapplication.country}
          city={jobapplication && jobapplication.city}
          totalapplications={
            jobapplication && jobapplication.application?.length
          }
        />
      </div>
      <div className="container">
        <h6>Total applications:- {jobapplication.application?.length}</h6>
      </div>
      <div
        className="container job-application-list"
        // style={{ maxHeight: "650px", overflow: "scroll" }}
      >
        {jobapplication &&
          jobapplication.application?.map((applicationlist, index) => (
            <>
              <div className="card job-requirements">
                <div className="job-items-collapse-option">
                  <div className="profile-name-date">
                    {applicationlist?.postedBy?.photo ? (
                      <div className="profile-name-avatar-image">
                        <img src={applicationlist?.postedBy?.photo} />
                      </div>
                    ) : (
                      <div className="profile-name-avatar">
                        <p>
                          {applicationlist?.postedBy?.name
                            ?.substring(0, 2)
                            .toUpperCase()}
                        </p>
                      </div>
                    )}

                    <div className="profile-name-post-date">
                      <p className="profile-name-size">
                        {applicationlist?.postedBy?.name}
                      </p>

                      <p>
                        Applied on:
                        {moment(applicationlist.date).format(
                          "MMMM Do YYYY, h:mm:ss a"
                        )}
                      </p>
                    </div>
                  </div>

                  <p className="collapse-icon-design">{index + 1}</p>
                </div>
                <p>Name: {applicationlist.name}</p>
                <p>E-mail: {applicationlist.email}</p>
                <p>Year of experience:{applicationlist.yearofexperience}</p>
                <p>Work experience:{applicationlist.workexperience}</p>
                <p>Skills: {applicationlist.skills}</p>
                <p>Projects: {applicationlist.projects}</p>
              </div>
            </>
          ))}
      </div>
    </React.Fragment>
  );
};

export default JobapplicationList;
