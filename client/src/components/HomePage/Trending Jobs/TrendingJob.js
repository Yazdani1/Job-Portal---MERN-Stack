import React, { useEffect, useState } from "react";
import "./trendingjob.css";
import { getTrendingjobpost } from "./apiTrending";

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
      <div className="container card trending-job">
          <div className="trending-job-title">
              <h2>Trending Jobs</h2>
              <span className="line"></span>
          </div>
        <div className="row">
          <h1>{trendingjob.length}</h1>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TrendingJob;
