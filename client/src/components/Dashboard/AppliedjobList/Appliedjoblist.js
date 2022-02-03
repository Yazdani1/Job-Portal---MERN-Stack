import React, { useContext, useEffect, useState } from "react";
import "./appliedjoblist.css";
import { getmyappliedjobList } from "./apiAppliedjoblist";

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
      <h5>Applied job list is here</h5>
      <h6>{JSON.stringify(appliedjoblist)}</h6>

      {appliedjoblist.map((item) => (
        <>
          <h1>{item.name}</h1>
          <p>{item.jobpost.des}</p>
        </>
      ))}
    </div>
  );
};

export default Appliedjoblist;
