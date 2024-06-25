import React from "react";
// import { Link } from "react-router-dom";

const Greeting = (props) => {
    const Message = props.message;
  return (
    <div className="greeting text-black" style={{marginTop:'75px',boxShadow:' 0 5px 15px rgba(0,0,0,.25)'}}>
      <section className="mt-5 py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto pt-5">
            <h1 className="fw-light">Welcome,<span style={{color:'maroon',textShadow:' 0 5px 7px',fontWeight:'bold'}}>{Message.username}</span></h1>
            <p className="lead">
            "Embark on a journey of growth! Create and register for events that shape your story. Your adventure awaits – seize the opportunity now!"
            </p>
            <p>
              <div className="d-flex justify-content-center gap-5">
              
              </div>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Greeting;
