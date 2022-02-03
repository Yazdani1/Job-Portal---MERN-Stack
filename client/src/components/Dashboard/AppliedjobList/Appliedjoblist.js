import React, { useContext, useEffect, useState } from "react";
import "./appliedjoblist.css";
import { apiAppliedjoblist } from "./apiAppliedjoblist";

const Appliedjoblist = () => {
  const [appliedjoblist, setAppliedjoblist] = useState([]);

  const loadappliedjoblist = () => {
    apiAppliedjoblist()
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
    </div>
  );
};

export default Appliedjoblist;
