import { getdetailsJob } from "./apiDetails";
import "./detailsjob.css";
import React, { useEffect, useState, useContext } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import moment from "moment";
import ReactHtmlParser from "react-html-parser";
import { FcOk, FcCollapse, FcExpand } from "react-icons/fc";
import { FcApproval } from "react-icons/fc";
import { SyncOutlined } from "@ant-design/icons";
import { Spin, Space } from "antd";
import { MdLocationPin } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import { UserContext } from "../../UserContext";

const Detailsjob = () => {
  const { id } = useParams();
  const [state, setState] = useContext(UserContext);

  //details job post state
  const [detailsjob, setDetailsjob] = useState([]);

  //details post collapse option state

  //loding state
  const [loading, setLoading] = useState(true);

  const loadDetailsjobpost = () => {
    getdetailsJob(id)
      .then((result) => {
        setDetailsjob(result);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadDetailsjobpost();
  }, [detailsjob]);

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
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 col-xl-8">
            <div className="job-details-page">
              <div className="card job-description">
                <h6>Description</h6>
                <p>
                  {ReactHtmlParser(detailsjob && detailsjob.jobdetails?.des)}
                </p>
              </div>
              <div className="card job-requirements">
                <div className="job-items-collapse-option">
                  <h6>Requirements</h6>
                  <p className="collapse-icon-design"><FcCollapse size={20}/></p>
                </div>
                <p>
                  {ReactHtmlParser(
                    detailsjob && detailsjob.jobdetails?.requirements
                  )}
                </p>
              </div>
              <div className="card job-skills">
                <h6>Skills</h6>
                <p>
                  {ReactHtmlParser(detailsjob && detailsjob.jobdetails?.skills)}
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 col-xl-8"></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Detailsjob;
