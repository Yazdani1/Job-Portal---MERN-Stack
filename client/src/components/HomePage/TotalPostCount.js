import React from "react";
import "./totalpostcount.css";
import { BsGraphUp } from "react-icons/bs";
import { FaUserSecret } from "react-icons/fa";
import { MdCardMembership } from "react-icons/md";
import { FcContacts, FcApproval } from "react-icons/fc";
import RubberBand from "react-reveal/RubberBand";
import { Link, useHistory, useParams } from "react-router-dom";
import Flip from "react-reveal/Flip";
const Totalpostcount = ({ totalpost, totaluser }) => {
  return (
    <div className="container total-post-info">
      <div className="row">
        <Flip left>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="home-post-count">
              <p>Total Published Jobs</p>
              <h4>
                <BsGraphUp size={25} />
              </h4>
              <p>{totalpost}</p>
            </div>
          </div>
        </Flip>
        <Flip left>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="total-user-list">
              <p>Joined Members</p>

              <p>
                <FaUserSecret size={25} />
              </p>

              <p>{totaluser}</p>
            </div>
          </div>
        </Flip>
        <Flip left>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="apply-for-job">
              <p>Are you looking for a job?</p>
              <p>
                <FcApproval size={25} />
              </p>
              <p>Search your Job</p>
            </div>
          </div>
        </Flip>
      </div>
    </div>
  );
};
export default Totalpostcount;
