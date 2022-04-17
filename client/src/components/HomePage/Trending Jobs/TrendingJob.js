import React, { useEffect, useState } from "react";
import "./trendingjob.css";
import { getTrendingjobpost } from "./apiTrending";
import { FcApproval, FcNightPortrait, FcBookmark } from "react-icons/fc";
import Trending from "./Trending";

const TrendingJob = () => {
  const [trendingjob, setTrendingjob] = useState([]);

  const loadTrendingjob = () => {
    getTrendingjobpost()
      .then((result) => {
        if (result) {
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

  return (
    <React.Fragment>
      <div className="container-fluid card trending-job">
        <div className="trending-job-title">
          <h4>Trending Jobs</h4>
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
