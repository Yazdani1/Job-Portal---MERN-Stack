import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../UserContext";
import { getallJobsinhomepage } from "./apiHomepage";
import { SyncOutlined } from "@ant-design/icons";

const Alljobposts = () => {
  //context api

  const [state, setState] = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  //get all job posts
  const [alljobposts, setAlljobposts] = useState([]);

  const loadallJobposts = () => {
    getallJobsinhomepage()
      .then((result) => {
        if (result) {
          setAlljobposts(result);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadallJobposts();
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
    <div>
      <h5>All job posts</h5>
      <p>{JSON.stringify(alljobposts)}</p>
    </div>
  );
};

export default Alljobposts;
