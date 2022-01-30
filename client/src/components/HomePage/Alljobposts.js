import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../UserContext";
import { getallJobsinhomepage, searchJobpost } from "./apiHomepage";
import { SyncOutlined } from "@ant-design/icons";
import Jobpostwebview from "./Jobpostwebview";
import Pagination from "../Dashboard/Published Jobs/Pagination";
import { ToastContainer, toast } from "react-toastify";

const Alljobposts = () => {
  //context api

  const [state, setState] = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  //search job post

  const [searchjob, setSearchjob] = useState("");

  //get all job posts
  const [alljobposts, setAlljobposts] = useState([]);

  //for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);

  //Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = alljobposts.slice(indexOfFirstPost, indexOfLastPost);
  const howManyPages = Math.ceil(alljobposts.length / postsPerPage);

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

  const searchjobs = () => {
    searchJobpost({ query: searchjob })
      .then((searchjobresult) => {
        if (searchjobresult) {
          setAlljobposts(searchjobresult);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
      setSearchjob("");
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
    <React.Fragment>
      <div className="container  search-container">
        <div className="card">
          <div className="row ">
            <div className="col-lg-8 col-md-8 col-sm-8 col-xl-8">
              <div className="eventorganizer-search">
                <form>
                  <div className="event-form">
                    <input
                      type="text"
                      value={searchjob}
                      onChange={(e) => setSearchjob(e.target.value)}
                      className="form-control"
                      maxLength="100"
                      placeholder="search events .."
                    />
                  </div>
                </form>
                <span>{alljobposts.length} Jobs found</span>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xl-4">
              <div className="eventorganizer-search">
                <p onClick={searchjobs}>Search</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {alljobposts.length ? (
            currentPosts.map((job, index) => (
              //for large to medium screen

              <>
         

                {/* for extra large screen */}

                <Jobpostwebview
                  name={job.name}
                  des={job.des}
                  userid={job.postedBy?._id}
                  photo={job?.postedBy?.photo}
                  username={job.postedBy?.name}
                  postid={job._id}
                  date={job.date}
                  jobtypes={job.jobtypes}
                  country={job.country}
                  city={job.city}
                  totalapplications={job.application.length}
                />
              </>
            ))
          ) : (
            <h5 className="card">No search result found with your query</h5>
          )}
        </div>
        <div className="card pagination-job-posts-homepage">
          {alljobposts.length > 1 ? (
            <Pagination pages={howManyPages} setCurrentPage={setCurrentPage} />
          ) : null}
        </div>
      </div>

      <ToastContainer autoClose={8000} />
    </React.Fragment>
  );
};

export default Alljobposts;
