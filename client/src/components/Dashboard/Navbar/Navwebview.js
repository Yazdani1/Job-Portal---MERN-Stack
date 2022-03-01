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
import { AiFillMessage,AiOutlineUsergroupAdd } from "react-icons/ai";
import { GiRamProfile } from "react-icons/gi";
import { MdPersonAddAlt1 } from "react-icons/md";
import { UserContext } from "../../UserContext";
import ReactTooltip from "react-tooltip";
import { BsStack, BsFillBookmarkStarFill } from "react-icons/bs";




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

          <NavLink
            to="/wishlist"
            style={{ textDecoration: "none" }}
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            <div className="sidebar-item-back" data-tip="Wishlist">
              <div className="sidebar-items">
                <p>
                  <BsFillBookmarkStarFill size={20} />
                </p>
              </div>
            </div>
          </NavLink>

          <NavLink
            to="/add-employee/"
            style={{ textDecoration: "none" }}
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            <div className="sidebar-item-back" data-tip="Add Employee">
              <div className="sidebar-items">
                <p>
                  <MdPersonAddAlt1 size={20} />
                </p>
              </div>
            </div>
          </NavLink>

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

          <NavLink
            to="/wishlist"
            style={{ textDecoration: "none" }}
            className={({ isActive }) =>
              isActive ? "largenavactive" : "inactive"
            }
          >
            <div className="sidebar-large-navdesign">
              <p>
                <BsFillBookmarkStarFill size={15} /> Wishlist
              </p>
            </div>
          </NavLink>

          <NavLink
            to="/add-employee/"
            style={{ textDecoration: "none" }}
            className={({ isActive }) =>
              isActive ? "largenavactive" : "inactive"
            }
          >
            <div className="sidebar-large-navdesign">
              <p>
                <BsFillBookmarkStarFill size={15} /> Add-Employee
              </p>
            </div>
          </NavLink>

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
