import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link, useHistory, useParams } from "react-router-dom";

const EditUserAccount = () => {
  const history = useHistory();

  const { userId } = useParams();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const loadUserProfileInfoToUpdate = () => {
    fetch("/api/getuser-account-info/" + userId, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          setName(result.name);
          setEmail(result.email);
          setRole(result.role);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateJobpost = (e) => {
    e.preventDefault();

    fetch("/api/update-user-role/" + userId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        name,
        email,
        role,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.error) {
          toast.error(result.error, {
            position: toast.POSITION.TOP_RIGHT,
          });
        } else {
          toast.success("Job post updated Successfully! ", {
            position: toast.POSITION.TOP_RIGHT,
          });

          setName("");
          setEmail("");
          setRole("");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadUserProfileInfoToUpdate();
  }, []);

  return (
    <div>
      <div className="container-fluid create-event-container">
        <div className="row">
          <div className="col-lg-10 col-md-12 col-sm-12">
            <div className="card event-form-design">
              <div className="text-center">
                <h5 className="text-center">Update User Account</h5>
              </div>

              <form>
                <div className="event-form">
                  <label for="exampleInputEmail1" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                    maxLength="100"
                  />
                </div>
                <div className="event-form">
                  <label for="exampleInputEmail1" className="form-label">
                    E-mail
                  </label>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    maxLength="100"
                  />
                </div>

                <div className="event-form">
                  <label for="exampleInputEmail1" className="form-label">
                    Account Role
                  </label>
                  <select
                    className="custom-select"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  >
                    <option value="Subscriber">Subscriber</option>
                    <option value="Admin">Admin</option>
                  </select>
                </div>

                <div
                  style={{ marginTop: "20px" }}
                  class="form-group justify-content-center align-items-center"
                >
                  <button
                    type="submit"
                    name="btnSubmit"
                    className="create-event-button"
                    onClick={updateJobpost}
                  >
                    Update Account
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer autoClose={8000} />
    </div>
  );
};

export default EditUserAccount;
