import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import "./style.css";
import AlertBoxBefore from "../AlertBoxBefore";
// import Head from "../Head";
import axios from "axios";

function Login() {
  const [modalShow, setModalShow] = useState(false);
  const [msg, setMsg] = useState("");
  const [auth, setAuth] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    try {
      e.preventDefault();
      axios.post("https://event-edge-frontend.vercel.app/signin", data).then((res) => {
        localStorage.setItem("token", res.data.token);
        setAuth(true);
      }).catch((error)=>{
        if (error.response) {
          setModalShow(true);
          setMsg(error.response.data.message);
          console.error('Server responded with error status:', error.response.status);
        }
      });
    } catch (err) {
      alert(err);
    }
  };
  if (auth) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div>
      <div>{/* <Head /> */}</div>
      <div className="row g-0 vh-50 justify-content-center align-items-center login-container p-54">
        <div className="col-10 row g-0 align-items-center rounded-2 bg-white p-5">
          <div className="d-none d-md-block col-6 p-5">
            <img
              src="https://images.unsplash.com/photo-1606216836560-25cf33c04b0d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="img"
              height={600}
              width={400}
            />
          </div>

          <form onSubmit={handleLogin} className="col-12 col-md-6 py-4 px-1">
            <h1 className="login-title text-center py-2 mb-4">
              <span style={{ color: "maroon" }}>S</span>ign
              <span style={{ color: "maroon" }}>I</span>n
            </h1>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="nameexample.com"
                onChange={changeHandler}
              />
              <label htmlFor="email">Email</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="password"
                onChange={changeHandler}
              />
              <label htmlFor="password">Password</label>
            </div>
            <div className="d-flex justify-content-start mb-2">
              Forgot Password?
              <Link to="/forgotpass" className="text-green">
                Click Here
              </Link>
            </div>
            <div className="text-center">
              <button
                className="login-btn py-3 rounded-3"
                style={{ backgroundColor: "maroon" }}
              >
                <b>SignIn</b>
              </button>
            </div>
            {modalShow && (
              <AlertBoxBefore
                message={msg}
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            )}
            <div className="d-flex justify-content-around mt-3">
              <div>
                Not Registered?{" "}
                <Link to="/signup" className="text-green">
                  SignUp
                </Link>
              </div>
              <div>
                Go to Home?{" "}
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

export default Login;
