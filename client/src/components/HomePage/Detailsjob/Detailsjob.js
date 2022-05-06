import { getdetailsJob } from "./apiDetails";
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
import { UserContext } from "../../UserContext";
import Footer from "../Footer/Footer";
import Detailsjobwebview from "./Detailsjobwebview";
import Morejobs from "./Morejobs";
import Applyjob from "./Applyjob";

const Detailsjob = () => {
  const { id } = useParams();
  const [state, setState] = useContext(UserContext);

  //details job post state
  const [detailsjob, setDetailsjob] = useState([]);

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
            <Detailsjobwebview
              name={detailsjob && detailsjob.jobdetails?.name}
              des={detailsjob && detailsjob.jobdetails?.des}
              requirements={detailsjob && detailsjob.jobdetails?.requirements}
              skills={detailsjob && detailsjob.jobdetails?.skills}
              house={detailsjob && detailsjob.jobdetails?.house}
              city={detailsjob && detailsjob.jobdetails?.city}
              country={detailsjob && detailsjob.jobdetails?.country}
              totalapplications={
                detailsjob && detailsjob.jobdetails?.application.length
              }
              jobtypes={detailsjob && detailsjob.jobdetails?.jobtypes}
              username={detailsjob && detailsjob.jobdetails?.postedBy?.name}
            />
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 col-xl-4">
            <Applyjob
             
              jobId={detailsjob && detailsjob.jobdetails?._id}
            />
          </div>
        </div>
        <div className="morejobs-design">
          <h5>More Jobs</h5>
          <Morejobs />
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
};

export default Detailsjob;
