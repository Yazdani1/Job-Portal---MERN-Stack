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
import Footer from "../Footer/Footer";
const Detailsjob = () => {
  const { id } = useParams();
  const [state, setState] = useContext(UserContext);

  //details job post state
  const [detailsjob, setDetailsjob] = useState([]);

  //details post collapse option state

  const [show, setShow] = useState(true);
  const [showskills, setShowskills] = useState(true);
  const [showsaddress, setShowsaddress] = useState(false);

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

              <div className="card job-company-info">
                <Link
                  to={"/organizers-public-profile/" + id}
                  style={{ textDecoration: "none" }}
                >
                  <div className="profile-name-date">
                    {detailsjob && detailsjob.jobdetails?.photo ? (
                      <div className="profile-name-avatar-image">
                        <img src={detailsjob && detailsjob.jobdetails?.photo} />
                      </div>
                    ) : (
                      <div className="profile-name-avatar">
                        <p>{detailsjob && detailsjob.jobdetails?.postedBy?.name?.substring(0, 2).toUpperCase()}</p>
                      </div>
                    )}

                    <div className="profile-name-post-date">
                      <p className="profile-name-size">{detailsjob && detailsjob.jobdetails?.postedBy?.name}</p>
                      <p>{moment(detailsjob && detailsjob.jobdetails?.date).format("MMMM Do YYYY")}</p>
                    </div>
                  
                  </div>
                </Link>
              </div>


              <div className="card job-description">
                <h6>Description</h6>
                <p>
                  {ReactHtmlParser(detailsjob && detailsjob.jobdetails?.des)}
                </p>
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
                {show ? (
                  <p>
                    {ReactHtmlParser(
                      detailsjob && detailsjob.jobdetails?.requirements
                    )}
                  </p>
                ) : null}
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

                {showskills ? (
                  <p>
                    {ReactHtmlParser(
                      detailsjob && detailsjob.jobdetails?.skills
                    )}
                  </p>
                ) : null}
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
                    <p>{detailsjob && detailsjob.jobdetails?.house}</p>
                    <p>{detailsjob && detailsjob.jobdetails?.city}</p>
                    <p>{detailsjob && detailsjob.jobdetails?.country}</p>
                  </>
                ) : null}
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 col-xl-8"></div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Detailsjob;
