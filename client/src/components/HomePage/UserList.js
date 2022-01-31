import React, { useEffect, useState } from "react";
import "./userlist.css";
import { getlimiteduserlist } from "./apiHomepage";
import moment from "moment";
import { Link, useHistory, useParams } from "react-router-dom";

const UserList = () => {
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

  useEffect(() => {
    limituserlist();
  }, []);

  return (
    <div className="container">
      <h6 className="title-user-profile">Visit Employers profile</h6>
      <div className="row">
        {limitusers.map((user, index) => (
          <div className="col-lg-4 col-md-6 col-sm-6 col-xl-3" key={index}>
              
            <div className="user-infocard card">
              {user && user.photo ? (
                <div className="user-profile-picture-image">
                  <img src={user && user.photo} />

                  <p>{user.name}</p>
                </div>
              ) : (
                <div className="profile-pic-and-name">
                  <div className="user-profile-pic">
                    <p>{user && user.name.substring(0, 2).toUpperCase()}</p>
                  </div>
                  <p>{user.name}</p>
                </div>
              )}

              <p>{moment(user.createdAt).format("MMMM Do YYYY")}</p>
              <div className="view-profile-button">
                <Link
                  to={"/organizers-public-profile/" + user._id}
                  style={{ textDecoration: "none" }}
                >
                  <span className="view-profile">View Profile</span>
                </Link>
              </div>
            </div>


          </div>
        ))}
      </div>

      {limitusers ? (
        <Link to={"/event-organizers"} style={{ textDecoration: "none" }}>
          <div className="main_container-button">
            <span className="view-allusers-button">
              View All Employers
            </span>
          </div>
        </Link>
      ) : null}
    </div>
  );
};

export default UserList;
