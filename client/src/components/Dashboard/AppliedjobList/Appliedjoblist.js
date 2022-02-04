import React, { useContext, useEffect, useState } from "react";
import "./appliedjoblist.css";
import { getmyappliedjobList } from "./apiAppliedjoblist";
import ReactHtmlParser from "react-html-parser";
import Pagination from "../../Dashboard/Published Jobs/Pagination";
import { FcComboChart, FcFilledFilter } from "react-icons/fc";
import { EyeOutlined } from "@ant-design/icons";
import { Link, useHistory, useParams } from "react-router-dom";
import moment from "moment";


const Appliedjoblist = () => {
  const [appliedjoblist, setAppliedjoblist] = useState([]);

    //for pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(6);
  
    //Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = appliedjoblist.slice(indexOfFirstPost, indexOfLastPost);
    const howManyPages = Math.ceil(appliedjoblist.length / postsPerPage);
  

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

      {/* to show job posts in the table  */}

      <div className="container-fluid main_containers">
        {/* table start */}

        {currentPosts.length > 0 ? (
          <div className="card table-horizontal">
            <table class="table table-bordered table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Job Title</th>
                  <th scope="col">Description</th>
                  <th scope="col">Published on</th>
                  <th scope="col">Job Types</th>
                  <th scope="col">Applied on</th>

                  {/* <th scope="col">Total applications</th>

                  <th scope="col">View Applications</th> */}
                  <th colspan="5">Action</th>
                </tr>
              </thead>
              <tbody>
                {currentPosts.map((item, index) => (
                  <tr key={item._id}>
                    <th scope="row">{index + 1}</th>

                    <td>{item.jobpost.name?.substring(0, 30)}</td>
                    <td>{ReactHtmlParser(item.jobpost.des?.substring(0, 100))}</td>

                    <td> {moment(item.jobpost.date).format("MMMM Do YYYY")}</td>
                    <td>{item.jobpost.jobtypes}</td>
                    <td> {moment(item.date).format("MMMM Do YYYY")}</td>


                    {/* to get all the joined members for each event post */}

                    {/* {item.application.map((joinedmembers) => (
                      <>
                        <p>{joinedmembers.name}</p>
                      </>
                    ))} */}

                

                    {/* to loops the post comment in the admin dashboard */}
                    {/* <td>{item.comments.map(c=>(
                      <h1>{c.text}</h1>
                    ))}</td> */}

                    <td>
                      <Link to={"/job-description/" + item.jobpost._id}>
                        <button className="btn btn-primary">
                          <EyeOutlined style={{ fontSize: "20px" }} /> View Job 
                        </button>
                      </Link>
                    </td>
                    

                 
                
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <h5 className="card noposts-design">
            <FcComboChart size={200} />
            No data to show!
          </h5>
        )}


        <div className="card pagination-dashboard">
          {appliedjoblist.length > 1 ? (
            <Pagination pages={howManyPages} setCurrentPage={setCurrentPage} />
          ) : null}
        </div>
      </div>

    </div>
  );
};

export default Appliedjoblist;
