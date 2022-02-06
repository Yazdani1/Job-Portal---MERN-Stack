import React, { useState, useContext, useEffect } from "react";
import "./navweb.css";
import "./navheader.css";
import { NavLink } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";
import NavMobileview from "./NavMobileview";
import { AiFillDashboard } from "react-icons/ai";
import { RiEditFill } from "react-icons/ri";
import { FaUserNurse } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { Link, useHistory } from "react-router-dom";
import { BsHeartFill } from "react-icons/bs";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { AiFillMessage } from "react-icons/ai";
import { GiRamProfile } from "react-icons/gi";
import { MdQuestionAnswer } from "react-icons/md";
import { UserContext } from "../../UserContext";
import ReactTooltip from "react-tooltip";
import { BsStack } from "react-icons/bs";


const Navwebview = (props) => {
  const [state, setState] = useContext(UserContext);

  const history = useHistory();

  const logOut = () => {
    window.localStorage.removeItem("tokenLogin");
    window.localStorage.removeItem("token");
    setState(null);
    history.push("/signin");
  };

  useEffect(() => {
    ReactTooltip.rebuild();
  });

  return (
    <div>
      {props.sidebar ? (
        <div className="sidebar-small-design">
          <NavLink
            to="/dashboard"
            style={{ textDecoration: "none" }}
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            <div className="sidebar-item-back" data-tip="Dashboard">
              <div className="sidebar-items">
                <p>
                  {/* <AiFillHome size={20} onClick={() => setSidebar(!sidebar)} /> */}
                  <AiFillDashboard size={20} />
                </p>

                {/* <p>Dashboard</p> */}
              </div>
            </div>
          </NavLink>

          <NavLink
            to="/create-job-post"
            style={{ textDecoration: "none" }}
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            <div className="sidebar-item-back" data-tip="Create Jobs">
              <div className="sidebar-items">
                <p>
                  <RiEditFill size={20} />
                </p>

                {/* <p>Create Event</p> */}
              </div>
            </div>
          </NavLink>

          <NavLink
            to="/profile"
            style={{ textDecoration: "none" }}
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            <div className="sidebar-item-back" data-tip="Profile">
              <div className="sidebar-items">
                <p>
                  <FaUserNurse size={20} />
                </p>

                {/* <p>Profile</p> */}
              </div>
            </div>
          </NavLink>

          <NavLink
            to="/applied-jobs"
            style={{ textDecoration: "none" }}
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            <div className="sidebar-item-back" data-tip="Applied Jobs">
              <div className="sidebar-items">
                <p>
                  <BsStack size={20} />
                </p>

                {/* <p>Profile</p> */}
              </div>
            </div>
          </NavLink>


          {/* <NavLink
            to="/AddExperience"
            style={{ textDecoration: "none" }}
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            <div className="sidebar-item-back">
              <div className="sidebar-items">
                <p>
                  <GiSkills size={20} />
                </p>

                 <p>Experience</p>
              </div>
            </div>
          </NavLink>  */}

          {/* <NavLink
            to="/favourite"
            style={{ textDecoration: "none" }}
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            <div className="sidebar-item-back">
              <div className="sidebar-items">
                <p>
                  <BsHeartFill size={20} />
                </p>

               <p>Favourite</p> 
              </div>
            </div>
          </NavLink> */}

          {/* <NavLink
            to="/my-comments"
            style={{ textDecoration: "none" }}
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            <div className="sidebar-item-back">
              <div className="sidebar-items">
                <p>
                  <MdQuestionAnswer size={20} />
                </p>

              <p>Comments</p> 
              </div>
            </div>
          </NavLink> */}

          <NavLink
            to="/message"
            style={{ textDecoration: "none" }}
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            <div className="sidebar-item-back" data-tip="Messages">
              <div className="sidebar-items">
                <p>
                  <AiFillMessage size={20} />
                </p>

            
              </div>
            </div>
          </NavLink>

          {/* <NavLink
            target={"_blank"}
            to={"/userprofile/" + (userdetails && userdetails._id)}
            style={{ textDecoration: "none" }}
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            <div className="sidebar-item-back">
              <div className="sidebar-items">
                <p>
                  <GiRamProfile size={20} />
                </span>

                <p>Public Profile</p>
              </div>
            </div>
          </NavLink> */}

          <div className="sidebar-item-back" data-tip="Log Out">
            <div className="sidebar-items" onClick={logOut}>
              <p>
                <RiLogoutCircleRLine size={20} />
              </p>

              {/* <p>Log Out</p> */}
            </div>
          </div>
        </div>
      ) : (
        <div className="sidebar-large">
          <NavLink
            to="/dashboard"
            style={{ textDecoration: "none" }}
            className={({ isActive }) =>
              isActive ? "largenavactive" : "inactive"
            }
          >
            <div className="sidebar-large-navdesign">
              <p>
                <AiFillDashboard size={15} /> Dashboard
              </p>
            </div>
          </NavLink>

          <NavLink
            to="/create-job-post"
            style={{ textDecoration: "none" }}
            className={({ isActive }) =>
              isActive ? "largenavactive" : "inactive"
            }
          >
            <div className="sidebar-large-navdesign">
              <p>
                <RiEditFill size={15} />
                Create Jobs
              </p>
            </div>
          </NavLink>

          <NavLink
            to="/profile"
            style={{ textDecoration: "none" }}
            className={({ isActive }) =>
              isActive ? "largenavactive" : "inactive"
            }
          >
            <div className="sidebar-large-navdesign">
              <p>
                <FaUserNurse size={15} /> Profile
              </p>
            </div>
          </NavLink>
          <NavLink
            to="/applied-jobs"
            style={{ textDecoration: "none" }}
            className={({ isActive }) =>
              isActive ? "largenavactive" : "inactive"
            }
          >
            <div className="sidebar-large-navdesign">
              <p>
                <BsStack size={15} /> Applied Jobs
              </p>
            </div>
          </NavLink>
          {/* 
          <NavLink
            to="/AddExperience"
            style={{ textDecoration: "none" }}
            className={({ isActive }) =>
              isActive ? "largenavactive" : "inactive"
            }
          >
            <div className="sidebar-large-navdesign">
              <p>
                <GiSkills size={15} /> Experience
              </p>
            </div>
          </NavLink> */}

          {/* <NavLink
            to="/favourite"
            style={{ textDecoration: "none" }}
            className={({ isActive }) =>
              isActive ? "largenavactive" : "inactive"
            }
          >
            <div className="sidebar-large-navdesign">
              <p>
                <BsHeartFill size={15} /> Favourite
              </p>
            </div>
          </NavLink> */}

          {/* <NavLink
            to="/my-comments"
            style={{ textDecoration: "none" }}
            className={({ isActive }) =>
              isActive ? "largenavactive" : "inactive"
            }
          >
            <div className="sidebar-large-navdesign">
              <p>
                <MdQuestionAnswer size={15} /> My Comments
              </p>
            </div>
          </NavLink> */}

          {/* <NavLink
            to="/message"
            style={{ textDecoration: "none" }}
            className={({ isActive }) =>
              isActive ? "largenavactive" : "inactive"
            }
          >
            <div className="sidebar-large-navdesign">
              <p>
                <AiFillMessage size={15} /> Messages
              </p>
            </div>
          </NavLink> */}

          {/* <NavLink
            target={"_blank"}
            to={"/userprofile/" + (userdetails && userdetails._id)}
            style={{ textDecoration: "none" }}
            className={({ isActive }) =>
              isActive ? "largenavactive" : "inactive"
            }
          >
            <div className="sidebar-large-navdesign">
              <p>
                <GiRamProfile size={15} /> Public Profile
              </p>
            </div>
          </NavLink> */}

          <div className="sidebar-large-navdesign" onClick={logOut}>
            <p>
              <AiOutlineLogout size={15} /> Log Out
            </p>
          </div>
        </div>
      )}

      <NavMobileview />
      <ReactTooltip place="right" type="dark" effect="solid" />
    </div>
  );
};

export default Navwebview;
