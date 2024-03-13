import React from "react";
import "./Head.css";
import "./Hero.css";
import { Link } from "react-router-dom";
import Bg from '../img/Bg.mp4'

const Hero = () => {
  return (
    <>
      <header className="header position-relative">
        <div>
        <video className="VideoBg" src={Bg} autoPlay loop muted/>
        </div>
        {/* <img
          src="https://res.cloudinary.com/parallax-agency/image/upload/c_fill%2Cq_auto%2Cf_auto/statamic/cpd-2020-production/what-are-cpd-seminars.jpg"
          alt="hero"
          className="img-fluid"
          style={{opacity:'60%'}}
        /> */}
        <div className="container-fluid position-absolute top-50 start-50 translate-middle text-center content">
          <h1 className="display-3 fw-bold text-body-emphasis" style={{fontStyle:'italic'}}>
            <span
              style={{ color: "maroon", fontFamily: "'Lobster', sans-serif" }}
            >
              E
            </span>
            vent
            <span
              style={{ color: "maroon", fontFamily: "'Lobster', sans-serif" }}
            >
              E
            </span>
            dge
          </h1>
          <div className="col-lg-6 mx-auto d-grid justify-content-sm-center">
            <p className="lead mb-4 text-dark">
             <b>Empowering seamless event experiences, turning visions into
              memorable realities.</b>
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-center">
              <Link
                to="/signin"
                className="btn btn-dark btn-lg px-4 gap-3"
                style={{
                  backgroundColor: "maroon",
                  marginRight: "30px",
                  width: "150px",
                }}
              >
                <b>SignIn</b>
              </Link>
              <Link
                to="/signup"
                className="btn btn-dark btn-lg px-4 gap-3"
                style={{ backgroundColor: "maroon", width: "150px" }}
              >
                <b>SignUp</b>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Hero;
