import React, { useEffect } from "react";
import Alljobposts from "./Alljobposts";
import Footer from "./Footer/Footer";
import UserList from "./UserList";
import FirstSection from "./FirstSection";
import {
  getallJobsinhomepage,
  getallUserlist,
  getlimiteduserlist,
} from "./apiHomepage";
import Totalpostcount from "./TotalPostCount";
import { useState } from "react";

const Home = () => {
  const [alljobs, setAlljobs] = useState([]);
  const [allusers, setAllusers] = useState([]);

  //to get limit number of user list in the home page
  const [limitusers, setLimitusers] = useState([]);

  //to get limit number of user list for the home page

  const limituserlist = () => {
    getlimiteduserlist()
      .then((result) => {
        setLimitusers(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const loadallJobposts = () => {
    getallJobsinhomepage()
      .then((result) => {
        if (result) {
          setAlljobs(result);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //to get all the user list

  const loadallUsers = () => {
    getallUserlist()
      .then((result) => {
        if (result) {
          setAllusers(result);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadallJobposts();
    loadallUsers();
    limituserlist();
  }, []);

  return (
    <div>
      <FirstSection />
      <Totalpostcount totalpost={alljobs.length} totaluser={allusers.length} />
      <Alljobposts />
      {JSON.stringify(limitusers)}
      <UserList/>
      <Footer />
    </div>
  );
};

export default Home;
