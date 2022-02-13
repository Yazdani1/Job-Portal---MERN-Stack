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
import Jobpostwebview from "../Jobpostwebview";
import { savejobtoWishlist } from "../../Dashboard/wishlist/apiWishlist";

const Morejobs = () => {
  const { id } = useParams();

  const [morejobpost, setMorejobs] = useState([]);

  //loding state
  const [loading, setLoading] = useState(true);

  const loadmorejobs = () => {
    getdetailsJob(id)
      .then((result) => {
        setMorejobs(result);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

    //save job

    const savejobPosttowishlist = (postID) => {
      savejobtoWishlist(postID)
        .then((result) => {
          if (result) {
            toast.success("This job has saved in your profile", {
              position: toast.POSITION.TOP_RIGHT,
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };

  useEffect(() => {
    loadmorejobs();
  }, [morejobpost]);

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
      {morejobpost?.morejobs?.map((job) => (
        <>
          <Jobpostwebview
            name={job.name}
            des={job.des}
            userid={job.postedBy?._id}
            photo={job?.postedBy?.photo}
            username={job.postedBy?.name}
            postid={job._id}
            date={job.date}
            jobtypes={job.jobtypes}
            country={job.country}
            city={job.city}
            totalapplications={job.application.length}
            savejobPosttowishlist={savejobPosttowishlist}
          />
        </>
      ))}
    </React.Fragment>
  );
};

export default Morejobs;
