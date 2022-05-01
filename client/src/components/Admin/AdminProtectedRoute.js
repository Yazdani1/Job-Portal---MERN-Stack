import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import Navwebview from "./Navbar/Navwebview";
import Navheader from "./Navbar/Navheader";
import ReactTooltip from "react-tooltip";

import "./Navbar/navheader.css";
import "./Navbar/navweb.css";
import "./Navbar/navmobile.css";
import { UserContext } from "../UserContext";

const AdminProtectedRoute = (props) => {
  const history = useHistory();
  let AdminProtected = props.AdminProtected;

  const [sidebar, setSidebar] = useState(true);
  const [state, setState] = useContext(UserContext);

  const openNavbar = () => {
    setSidebar(!sidebar);
  };

  // useEffect(() => {
  //   if (!localStorage.getItem("tokenLogin")) {
  //     history.push("/signin");
  //   } else {
  //   }

  //   ReactTooltip.rebuild();
  // }, []);
  useEffect(() => {
    if (state && state.user && state.user.role === "Subscriber") {
      history.push("/");
    } else {
      history.push("/dashboard");

    }
  }, []);

  const getCurrentUserInfo = ()=>{

    

  }


  return (
    <div className="container-fluid">
      <Navheader data={openNavbar} />

      {/* <div className="container fluid"> */}
      <div className="row">
        <div className={sidebar ? "col-xl-1" : "col-xl-2"}>
          <Navwebview sidebar={sidebar} />
          {/* <DashboardNav /> */}
        </div>
        <div className={sidebar ? "col-xl-11" : "col-xl-10"}>
          <AdminProtected />
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default AdminProtectedRoute;
