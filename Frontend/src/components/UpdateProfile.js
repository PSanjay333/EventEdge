import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import AfterLogin from "./AfterLogin";
import axios from "axios";
// import Alert from "react-bootstrap/Alert";
import AlertBox from "./AlertBox";
import { Navigate } from "react-router-dom";

const UpdateProfile = () => {
  const [modalShow, setModalShow] = useState(false);
  const [message, setMessage] = useState("");
  const [data, setData] = useState({
    username: "",
    email: "",
    mobile: "",
    password: "",
    confirmpassword: "",
    bio: "",
    profile: "",
  });

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put("http://localhost:5000/update", data, {
        headers: {
          "x-token": localStorage.getItem("token"),
        },
      });
      console.log(response.data)
      if(response.data){
        setMessage("Profile Updated Successfully")
        setModalShow(true)
      }else{
        setMessage("Error in Updating Profile")
        setModalShow(true)
      }
    //   console.log(response.data); // Log the response data
    } catch (error) {
      console.error("Error in Updating:", error);
    }
  };
  if (!localStorage.getItem("token")) {
    return <Navigate to="/signin" />;
  }
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
  return (
    <div>
      <div>
        <AfterLogin />
      </div>
      <div className="container w-50" style={{ marginTop: "150px" }}>
        <div className="bg-dark text-light">
          <h1>
            <span style={{ color: "maroon" }}>U</span>pdate
            <span style={{ color: "maroon" }}>P</span>rofile
          </h1>
        </div>
        <Form onSubmit={handleUpdate}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="You can't change your username"
                name="username"
                onChange={changeHandler}
                disabled
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="email"
                name="email"
                onChange={changeHandler}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                onChange={changeHandler}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Phone Number"
                name="mobile"
                onChange={changeHandler}
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Bio</Form.Label>
            <Form.Control
              placeholder="Bio"
              name="bio"
              onChange={changeHandler}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Update Profile Photo</Form.Label>
            <Form.Control
              type="file"
              placeholder="Apartment, studio, or floor"
              name="profile"
              onChange={handleFileChange}
            />
          </Form.Group>
          <h6>OR</h6>
          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Update Profile link</Form.Label>
            <Form.Control
              type="text"
              placeholder="Provide profile link"
              name="profile"
              onChange={changeHandler}
            />
          </Form.Group>
          {/* <Alert key="light" variant="dark">
              <h6>{message}</h6>
            </Alert> */}
            {modalShow && (
            <AlertBox
              message={message}
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          )}
          <Button variant="dark" type="submit">
            Update
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default UpdateProfile;
