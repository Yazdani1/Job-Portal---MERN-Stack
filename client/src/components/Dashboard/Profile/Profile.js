import React, { useEffect, useState, useContext } from "react";
import "./profile.css";
import { UserContext } from "../../UserContext";

const Profile = () => {
  //context api
  const [state, setState] = useContext(UserContext);

  return (
    <React.Fragment>
      <div className="container card user-profile-info">
        <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 col-xl-4">
              <h6>Your profile Information</h6>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-8 col-xl-8">
              <h6>User profile name</h6>
            </div>
          </div>
  
      </div>
    </React.Fragment>
  );
};

export default Profile;
