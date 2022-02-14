import React, { useEffect, useState } from "react";
import "./wishlist.css";
import { getjobWishlist } from "./apiWishlist";
import ReactHtmlParser from "react-html-parser";

const Wishlist = () => {
  const [showwishlist, setShowwishlist] = useState([]);

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
                <div>
                  
                </div>
                <h6>{list.jobtypes}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Wishlist;
