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
  const [ok, setOk] = useState(false);

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
    if (state && state.token) getCurrentUserInfo()
  }, [state && state.token]);

  const getCurrentUserInfo = () => {
    fetch("/api/admin/current-user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.ok) {
          setOk(true);
        }
      })
      .catch((err) => {
        history.push("/signin");
      });
  };

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
