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
      <div className="container card">
        <div className="row"></div>
      </div>
    </React.Fragment>
  );
};

export default TrendingJob;
