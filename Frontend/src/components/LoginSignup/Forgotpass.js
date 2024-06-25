import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Forgotpass = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Send a request to your server to initiate password reset
      const response = await axios.post(
        "http://localhost:5000/forgotpass",
        data
      );

      // Handle success message
      setMessage(response.data);
      setError("");
    } catch (error) {
      // Handle error message
      setMessage("");
      setError(
        "Error initiating password reset. Please check your email and try again."
      );
    }
  };
  return (
    <div>
      <div>{/* <Head /> */}</div>
      <div className="row g-0 vh-100 justify-content-center align-items-center login-container">
        <div className="col-10 row g-0 align-items-center rounded-2 bg-white">
          <div className="d-none d-md-block col-6">
            <img
              src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
              alt=""
              className="img"
              height={290}
              width={500}
            />
          </div>

          <form onSubmit={handleLogin} className="col-12 col-md-6 py-4 px-3">
            <h1 className="login-title text-center py-2 mb-4">
              <span style={{ color: "maroon" }}>F</span>orgot{" "}
              <span style={{ color: "maroon" }}>P</span>assword
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

            <div className="text-center">
              <button
                className="login-btn py-3 rounded-3"
                style={{ backgroundColor: "maroon" }}
              >
                <b>Send OTP</b>
              </button>
            </div>
            {message && (
              <div className="text-success text-center mt-3">{message}</div>
            )}
            {error && (
              <div className="text-danger text-center mt-3">{error}</div>
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
};

export default Forgotpass;
