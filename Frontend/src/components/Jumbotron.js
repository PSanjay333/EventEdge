import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import EE from '../img/Logo.png'
import EE1 from '../img/EE1.png'
import './Head.css'
// import Hero from "./Hero";


const Jumbotron = () => {
  return (
    <div>
      {/* <Hero/> */}
      <div className="container my-5">
        <div className="p-5 text-center bg-body-tertiary rounded-3">
          <img src={EE1} alt='logo' height={300} width={300} style={{borderRadius:'50%'}} className="img-fluid"/>
          <div className="p-5">
          <h1 className="text-body-emphasis text-success"><span style={{color:'maroon'}}>Plan, Organize, and Manage Events with Ease</span></h1>
          <hr style={{color:'maroon'}}/>
          <p className="col-lg-8 mx-auto fs-5 text-muted">
          Embrace EventEdge – Your Solution for Effortless Event Management. We've reimagined event planning to simplify the process, whether you're an organizer or an attendee. Join us and make every event an exciting adventure.   
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
