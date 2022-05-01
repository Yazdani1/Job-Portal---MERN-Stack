import React, { useEffect, useState } from "react";
import "./wishlist.css";
import { getjobWishlist, removejobfromWishlist } from "./apiWishlist";
import ReactHtmlParser from "react-html-parser";
import { FcApproval } from "react-icons/fc";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { ToastContainer, toast } from "react-toastify";
import { Link, useHistory, useParams } from "react-router-dom";

const Wishlist = () => {
  const [showwishlist, setShowwishlist] = useState([]);

  //to load wishlist post

  const loadwishlist = () => {
    getjobWishlist()
      .then((result) => {
        if (result) {
          setShowwishlist(result);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //to delete wishlist job post

  const removeWishlist = (postID) => {
    removejobfromWishlist(postID)
      .then((result) => {
        if (result) {
          toast.success("Wishlist post deleted successfully! ", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadwishlist();
  }, [showwishlist]);

  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row">
          {showwishlist.wishlist?.map((list) => (
            <div className="col-xl-3 col-lg-3 col-md-4">
              <div className="wishlist card" key={list._id}>
                <h6>{list.name}</h6>

                <Link
                  to={"/job-description/" + list._id}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <p>{ReactHtmlParser(list.des.substring(0, 150))}</p>
                </Link>
                <div className="wishlis-jobtypes-deletbutton">
                  <h6>
                    <FcApproval size={20} style={{ color: "red" }} />
                    {list.jobtypes}
                  </h6>
                  <h6 onClick={() => removeWishlist(list._id)}>
                    <RiDeleteBin6Fill size={20} style={{ color: "red" }} />
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ToastContainer autoClose={8000} />
    </React.Fragment>
  );
};

export default Wishlist;
