import React, { useEffect, useState } from "react";
import "./trendingjob.css";
import { getTrendingjobpost } from "./apiTrending";
import { FcApproval, FcNightPortrait, FcBookmark } from "react-icons/fc";
import Trending from "./Trending";
import { SyncOutlined } from "@ant-design/icons";

import Fade from "react-reveal/Fade";
const TrendingJob = () => {
  const [trendingjob, setTrendingjob] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadTrendingjob = () => {
    getTrendingjobpost()
      .then((result) => {
        if (result) {
          setLoading(false);

          setTrendingjob(result);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadTrendingjob();
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
      <div className="container-fluid card trending-job">
        <div className="trending-job-title">
          <h4>Trending Jobs {trendingjob.length}</h4>
          <span className="line"></span>
        </div>
        <div className="container">
          <div className="row">
            {trendingjob.map((item, index) => (
              <div className="col-xl-3 col-lg-4 col-md-6">
                <Trending
                  key={item._id}
                  name={item.name}
                  username={item.postedBy?.name}
                  date={item.date}
                  jobtypes={item.jobtypes}
                  application={item.application?.length}
                  postid={item._id}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TrendingJob;
