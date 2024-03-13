import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Alert from "react-bootstrap/Alert";
import AlertBoxBefore from "../AlertBoxBefore";
import "./style.css";
// import Head from "../Head";
import axios from "axios";
function SignUp() {
  const [modalShow, setModalShow] = useState(false);
  const [message, setMessage] = useState("");
  const [data, setData] = useState({
    username: "",
    email: "",
    mobile: "",
    password: "",
    confirmpassword: "",
    bio: "",
    profile:""
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setData({ ...data, profile: reader.result });
      };
      reader.onerror = (error) => {
        console.log("Error: ", error);
      };
    }
  };

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/signup", data).then((res) => {
      if(res.data.message==="SignUp Successful"){
        setMessage("SignUp Successful")
        setModalShow(true)
      }else{
        setMessage("SignUp unsuccessful")
        setModalShow(true)
      }
      console.log(res.data);
    });
    // console.log(data);
    // // console.log("Data:", JSON.stringify(data, null, 2));
  };

  return (
    <div>
      <div>{/* <Head /> */}</div>
      <div className="row g-0 vh-50 justify-content-center align-items-center SignUp-container">
        <div className="col-10 row g-0 align-items-center rounded-2 bg-white p-5">
          <div className="d-none d-md-block col-6">
            <img
              src="https://images.unsplash.com/photo-1509824227185-9c5a01ceba0d?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="img"
              height={600}
              width={400}
            />
          </div>

          <form onSubmit={handleSignUp} className="col-12 col-md-6 py-2 px-2">
            <h1 className="SignUp-title text-center py-2 mb-4">
              <span style={{ color: "maroon" }}>S</span>ign
              <span style={{ color: "maroon" }}>U</span>p
            </h1>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                placeholder="codediggy"
                // onChange={(e) => {
                //   setUsername(e.target.value);
                // }}
                onChange={changeHandler}
                required
              />
              <label htmlFor="username">Full Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="nameexample.com"
                // onChange={(e) => {
                //   setEmail(e.target.value);
                // }}
                onChange={changeHandler}
                required
              />
              <label htmlFor="email">Email</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="mobile"
                name="mobile"
                placeholder="mobile number"
                // onChange={(e) => {
                //   setConfirmPassword(e.target.value);
                // }}
                onChange={changeHandler}
                required
              />
              <label htmlFor="mobile">Phone Number</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="password"
                // onChange={(e) => {
                //   setPassword(e.target.value);
                // }}
                onChange={changeHandler}
                required
              />
              <label htmlFor="password">Password</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="confirmpassword"
                name="confirmpassword"
                placeholder="confirm password"
                // onChange={(e) => {
                //   setConfirmPassword(e.target.value);
                // }}
                onChange={changeHandler}
                required
              />
              <label htmlFor="password">Confirm Password</label>
            </div>

            <div className="form-floating mb-3">
              <textarea
                className="form-control"
                id="bio"
                name="bio"
                placeholder="About me"
                // onChange={(e) => {
                //   setConfirmPassword(e.target.value);
                // }}
                onChange={changeHandler}
              ></textarea>
              <label htmlFor="bio">Bio</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="file"
                className="form-control"
                id="profile"
                name="profile"
                placeholder="profile photo"
                // onChange={(e) => {
                //   setConfirmPassword(e.target.value);
                // }}
                onChange={handleFileChange}
              />
              <label htmlFor="profile">Upload Profile photo</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="profile"
                name="profile"
                placeholder="profile photo"
                // onChange={(e) => {
                //   setConfirmPassword(e.target.value);
                // }}
                onChange={changeHandler}
              />
              <label htmlFor="profile">Provide Profile link</label>
            </div>
            {/* <Alert key="light" variant="dark">
              <h6>{message}</h6>
            </Alert> */}
            {modalShow && (
            <AlertBoxBefore
              message={message}
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          )}
            <div className="text-center">
              <button
                className="SignUp-btn py-3 rounded-3"
                // onClick={() => {
                //   handleSignUp();
                // }}
                style={{ backgroundColor: "maroon" }}
              >
                SignUp
              </button>
            </div>

            <div className="d-flex justify-content-around mt-3">
              <div>
                Already Registered ?{" "}
                <Link to="/signin" className="text-green">
                  SignIn
                </Link>
              </div>
              <div>
                Go to Home ?{" "}
                <Link to="/" className="text-green">
                  Home
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
