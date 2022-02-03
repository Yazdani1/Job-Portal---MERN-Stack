import React, { useContext, useEffect, useState } from "react";
import "./appliedjoblist.css";
import { getmyappliedjobList } from "./apiAppliedjoblist";
import ReactHtmlParser from "react-html-parser";

const Appliedjoblist = () => {
  const [appliedjoblist, setAppliedjoblist] = useState([]);

  const loadappliedjoblist = () => {
    getmyappliedjobList()
      .then((result) => {
        setAppliedjoblist(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadappliedjoblist();
  }, []);

  return (
    <div>
      <h5>Applied job list:</h5>

      {appliedjoblist.map((item,index) => (
        <>
          <h4>{index+1}</h4>
          <p>Job Title: {item.jobpost.name}</p>
          <p>Job Des: {ReactHtmlParser(item.jobpost.des)}</p>
          <p>Job Type: {item.jobpost.jobtypes}</p>

        </>
      ))}
    </div>
  );
};

export default Appliedjoblist;
