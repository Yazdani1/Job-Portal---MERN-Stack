import React from "react";
import "./jobpost.css";

const Jobpostwebview = ({
  name,
  des,
  city,
  house,
  country,
  jobtypes,
  requirements,
  skills,
  username,
  userid,
  postid,
}) => {
  return (
    <React.Fragment>
      <div className="large-screen-allevent-view">
        <div className="card all-events">
          <Link
            to={"/organizers-public-profile/" + userid}
            style={{ textDecoration: "none" }}
          >
            <div className="profile-name-date">
              {photo ? (
                <div className="profile-name-avatar-image">
                  <img src={photo} />
                </div>
              ) : (
                <div className="profile-name-avatar">
                  <p>{username?.substring(0, 2).toUpperCase()}</p>
                </div>
              )}

              <div className="profile-name-post-date">
                <p className="profile-name-size">{username}</p>
                <p>{moment(date).format("MMMM Do YYYY")}</p>
              </div>
              {/* {joinedeventnumbers >= 2 ? (
                    <p className="trending">Trending</p>
                  ) : null} */}
            </div>
          </Link>

          <Link
            to={"/event-details-page/" + postid}
            style={{ textDecoration: "none", color: "black" }}
          >
            <h5>{name}</h5>
            <p>{ReactHtmlParser(des?.substring(0, 350))}</p>
          </Link>

          {/* <div className="row">
             <div className="col-lg-6 col-md-6 col-sm-6 col-xl-6">
              <div className="events-date-and-place">
                <p>Start date: {moment(startdate).format("MMMM Do YYYY")}</p>
                <p className="event-location">
                  Location: <MdLocationPin style={{ color: "red" }} />{" "}
                  {location}.
                </p>
              </div>
             </div>
             <div className="col-lg-6 col-md-6 col-sm-6 col-xl-6">
              <div className="event-seats-and-participate">
                <div className="going-interested">
                  {alreadylikedpost.includes(
                    state && state.user && state.user._id
                  ) ? (
                    <p
                      onClick={() => {
                        unlike(postid);
                      }}
                    >
                      <AiFillLike size={20} />
                    </p>
                  ) : (
                    <p
                      onClick={() => {
                        if (!localStorage.getItem("tokenLogin")) {
                          history.push("/signin");
                        } else {
                          addlike(postid);
                        }
                      }}
                    >
                      <AiOutlineLike size={20} />
                    </p>
                  )}
                </div>

                <div className="going-interested">
                  <p>{totallikes} Likes </p>
                </div>

                <div className="going-interested">
                  <p>Max seats: {maxmembers}</p>
                </div>

                <div className="going-interested">
                  <p>
                    Going <FcOk /> {joinedeventnumbers}
                  </p>
                </div>

                <div className="going-interested">
                  <p
                    onClick={() => {
                      if (!localStorage.getItem("tokenLogin")) {
                        history.push("/signin");
                      } else {
                        saveWishlist(postid);
                      }
                    }}
                  >
                    Save <BsFillBookmarkStarFill />
                  </p>
                </div>
              </div>
            </div> 
          </div>*/}
        </div>
      </div>
    </React.Fragment>
  );
};
export default Jobpostwebview;
