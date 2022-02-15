import React, { useEffect, useState } from "react";
import "./wishlist.css";
import { getjobWishlist } from "./apiWishlist";
import ReactHtmlParser from "react-html-parser";
import { FcApproval } from "react-icons/fc";
import { RiDeleteBin6Fill } from "react-icons/ri";

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

  const removeWishlist = ()=>{

    

  }


  useEffect(() => {
    loadwishlist();
  }, [showwishlist]);

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          {showwishlist.wishlist?.map((list) => (
            <div className="col-xl-3 col-lg-3 col-md-4">
              <div className="wishlist card" key={list._id}>
                <h6>{list.name}</h6>
                <p>{ReactHtmlParser(list.des.substring(0, 150))}</p>
                <div></div>
                <div className="wishlis-jobtypes-deletbutton">
                  <h6>
                    <FcApproval size={20} style={{ color: "red" }} />
                    {list.jobtypes}
                  </h6>
                  <h6>
                    <RiDeleteBin6Fill size={20} style={{ color: "red" }} />
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Wishlist;
