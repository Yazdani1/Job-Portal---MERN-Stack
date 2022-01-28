import React,{useEffect} from "react";
import Alljobposts from "./Alljobposts";
import Footer from "./Footer/Footer";
import FirstSection from "./FirstSection";
import { getallJobsinhomepage } from "./apiHomepage";
import Totalpostcount from "./TotalPostCount";
import { useState } from "react";



const Home = () => {

  const [alljobs,setAlljobs] = useState([]);

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


  useEffect(() => {
    loadallJobposts();
  }, []);


  return (
    <div>
      <FirstSection/>
      <Totalpostcount totalpost={alljobs.length} />
      <Alljobposts />
      <Footer/>
    </div>
  );
};

export default Home;
