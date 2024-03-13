import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  return (
    <>
    <div className='container my-5 bg-body-tertiary rounded-3'>
    <div className="container col-xl-10 col-xxl-8 p-5" id="contact">
      <div className="row align-items-center g-lg-5 py-5">
      <h1><span style={{color:'maroon'}}>Contact Us - EventEdge</span></h1>
      <hr style={{color:'maroon'}}/>
      <p style={{fontSize:"25px"}}>Feel free to reach out to us for any inquiries or feedback related to the "eventedge." We are here to assist you!</p>
      {/* <div className="col-lg-7 text-center text-lg-start">
        <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">Contact Us - EventEdge</h1>
        <p className="col-lg-10 fs-4">Feel free to reach out to us for any inquiries or feedback related to the event "eventedge." We are here to assist you!</p>
      </div> */}
      <div className="col-md-10 mx-auto col-sm-5">
        <form className="p-4 p-md-5 border rounded-3 bg-body-secondary">
          <div className="form-floating mb-3">
            <input type="name" className="form-control" id="floatingInput" placeholder="name"/>
            <label for="floatingInput">Name</label>
          </div>
          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input type="subject" className="form-control" id="floatingInput" placeholder="subject"/>
            <label for="floatingInput">Subject</label>
          </div>
          <div className="form-floating mb-3">
            <textarea className="form-control" id="floatingInput" placeholder="message" rows="4"></textarea>
            <label for="floatingInput">Message</label>
          </div>
          {/* <div className="form-floating mb-3">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
            <label for="floatingPassword">Password</label>
          </div> */}
          {/* <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me"/> Remember me
            </label>
          </div> */}
          <button className="w-100 btn btn-lg btn-dark" type="submit" style={{backgroundColor:'maroon'}}>Send message</button>
          {/* <hr className="my-4"/>
          <small className="text-body-secondary">By clicking Send message, you agree to the terms of use.</small> */}
        </form>
      </div>
    </div>
  </div>
  </div>
  </>
  )
}

export default Contact