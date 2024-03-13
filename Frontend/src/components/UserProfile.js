import React from "react";
import "./profile.css";
import "./Head.css";
import { Link } from "react-router-dom";

const UserProfile = (props) => {
  const Message = props.message;
  return (
    <>
      <section class="section about-section gray-bg" id="about">
        <div class="container">
          <div class="row align-items-center flex-row-reverse">
            <div class="col-lg-4">
              <div class="about-avatar">
                <img
                  src={Message.profile}
                  alt="profilephoto"
                  className="ProfilePic"
                />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="text-black">
                <h3 class="display-5 fw-bold text-green">Your Profile</h3>
                <hr/>
                <div class="col-lg-6 mx-auto">
                  <p class="lead mb-4 fs-5">{Message.bio}</p>
                  <div class="d-grid gap-5 d-sm-flex justify-content-sm-around">
                    <div>
                      <label><b>Username</b></label>
                      <p>{Message.username}</p>
                    </div>
                    <div>
                      <label><b>Email</b></label>
                      <p>{Message.email}</p>
                    </div>
                    <div>
                      <label><b>Phone</b></label>
                      <p>{Message.mobile}</p>
                    </div>
                  </div>
                  <div>
                      <Link to='/update-profile' className="btn btn-dark">Edit Profile</Link>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserProfile;
