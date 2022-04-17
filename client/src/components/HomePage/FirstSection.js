import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import "./Homefirstsection.css";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

const FirstSection = () => {
  const [user, setUser] = useContext(UserContext);

  return (
    <>
      <div className="container-fluid homepage-first">
        <div className="container first_section">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xl-12">
              <Fade left>
                <div class="top-left">
                  <div className="first_Section_data">
                    <h5>Welcome to this Job portal site</h5>
                    <p>
                      You can create your company profile and publish job posts
                    </p>
                    {!window.localStorage.getItem("tokenLogin") ? (
                      <>
                        <h5>Become a member today</h5>
                        <Link to={"/signup"} style={{ textDecoration: "none" }}>
                          <div className="publish-jobpost">
                            <p>Create your account</p>
                          </div>
                        </Link>
                      </>
                    ) : (
                      <Link to="/dashboard" style={{ textDecoration: "none" }}>
                        <div className="publish-jobpost">
                          <p> Publish Your Jobs</p>
                        </div>
                      </Link>
                    )}
                  </div>
                </div>
              </Fade>

              <div class="mobile-view">
                <div className="first_Section_data">
                  <h5>Welcome to this Job portal site</h5>
                  <p>
                    You can create your company profile and publish job posts
                  </p>
                  {!window.localStorage.getItem("tokenLogin") ? (
                    <>
                      <h5>Become a member today</h5>
                      <Link to={"/signup"} style={{ textDecoration: "none" }}>
                        <div className="publish-jobpost">
                          <p>Create your account</p>
                        </div>
                      </Link>
                    </>
                  ) : (
                    <Link to="/dashboard" style={{ textDecoration: "none" }}>
                      <div className="publish-jobpost-mobile-view">
                        <p> Publish Your Jobs</p>
                      </div>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default FirstSection;
