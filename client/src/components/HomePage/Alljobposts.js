import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../UserContext";
const Alljobposts = () => {

  //context api

  const [state, setState] = useContext(UserContext);
  const [loading, setLoading] = useState(true);


  return (
    <div>
      <h5>All job posts</h5>
    </div>
  );
};

export default Alljobposts;
