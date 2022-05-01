import React, { useEffect, useState } from "react";
import { getallUserlist } from "../../HomePage/apiHomepage";
import "./alluser.css";
import moment from "moment";
import { FaEdit } from "react-icons/fa";
import { deleteUseraccount } from "./apiAdmin";
import { ToastContainer, toast } from "react-toastify";
import { Link, useHistory, useParams } from "react-router-dom";

const AllUser = () => {
  const [users, setUsers] = useState([]);

  const loadallUserlist = () => {
    getallUserlist()
      .then((result) => {
        if (result) {
          setUsers(result);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteUserwholeaccount = (id) => {
    deleteUseraccount(id)
      .then((result) => {
        if (result) {
          loadallUserlist();
          toast.success("User account deleted successfully! ", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadallUserlist();
  }, []);

  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="card" style={{ marginTop: "10px", padding: "5px" }}>
          <h6>All User List:</h6>
        </div>
        <div className="row">
          <div className="card table-horizontal">
            <table class="table table-bordered table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">E-mail</th>
                  <th scope="col">Joined on</th>
                  <th scope="col">Role</th>
                  <th scope="col">UserID</th>

                  <th colspan="4">Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((item, index) => (
                  <tr key={item._id}>
                    <th scope="row">{index + 1}</th>

                    <td>{item.name}</td>
                    <td>{item.email}</td>

                    <td> {moment(item.date).format("MMMM Do YYYY")}</td>
                    <td>
                      <div
                        className={
                          item.role === "Admin"
                            ? "admin-color"
                            : "subscriber-color"
                        }
                      >
                        {item.role}
                      </div>
                    </td>
                    <td>{item._id}</td>

                    <td>
                    <Link to={"/all-user-info/update-user-account/" + item._id}>
                      <button className="btn btn-success">
                        <FaEdit size={20} /> Edit
                      </button>
                      </Link>
                    </td>
                    <td>
                      <button className="btn btn-danger" onClick={()=>{deleteUserwholeaccount(item._id)}}>
                        <FaEdit size={20} /> Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <ToastContainer autoClose={8000} />
    </React.Fragment>
  );
};

export default AllUser;
