import React, { useState, useEffect } from "react";
import { getallJobsinhomepage } from "../../HomePage/apiHomepage";
import moment from "moment";
import { MdDelete } from "react-icons/md";
import { deletemyJobs } from "../../Dashboard/Published Jobs/apiPublishedjobs";
import { ToastContainer, toast } from "react-toastify";

const AdminPostlist = () => {
  const [allposts, setAllposts] = useState([]);

  const loadallJobpostForAdmin = () => {
    getallJobsinhomepage()
      .then((result) => {
        if (result) {
          setAllposts(result);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteMyjobposts = (id) => {
    deletemyJobs(id)
      .then((result) => {
        if (result) {
          loadallJobpostForAdmin();
          toast.success("Job post deleted successfully! ", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadallJobpostForAdmin();
  }, []);

  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row">
          {allposts.map((item, i) => (
            <>
              <div className="col-xl-6 col-lg-6">
                <div
                  className="card"
                  style={{ padding: "10px", margin: "10px" }}
                >
                  <div className="profile-name-date">
                    {item?.postedBy?.photo ? (
                      <div className="profile-name-avatar-image">
                        <img src={item?.postedBy?.photo} />
                      </div>
                    ) : (
                      <div className="profile-name-avatar">
                        <p>
                          {item?.postedBy?.name?.substring(0, 2).toUpperCase()}
                        </p>
                      </div>
                    )}

                    <div className="profile-name-post-date">
                      <p className="profile-name-size">
                        {item?.postedBy?.name}
                      </p>
                      <p>{moment(item.date).format("MMM Do YY")}</p>
                    </div>
                  </div>
                  <div
                    className="content"
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <h6>{item.name}</h6>
                    <h6>{item.application.length} Application</h6>

                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        deleteMyjobposts(item._id);
                      }}
                    >
                      <MdDelete size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      <ToastContainer autoClose={8000} />
    </React.Fragment>
  );
};

export default AdminPostlist;
