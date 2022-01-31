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
  
  }, []);

  return (
    <div>
      <FirstSection />
      <Totalpostcount totalpost={alljobs.length} totaluser={allusers.length} />
      <Alljobposts />
      <UserList/>
      <Footer />
    </div>
  );
};

export default Home;
