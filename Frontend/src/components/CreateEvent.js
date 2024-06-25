import React, { useState } from "react";
import axios from "axios";
import AfterLogin from "./AfterLogin";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { Navigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import "./Events.css";
import "./Head.css";
import AlertBox from "./AlertBox";

const CreateEvent = () => {
  const [modalShow, setModalShow] = useState(false);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    organizer: "",
    title: "",
    date: "",
    time: "",
    location: "",
    description: "",
    city: "",
    state: "",
    zip: "",
    image: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    try {
      axios
        .post("http://localhost:5000/createEvent", formData, {
          headers: {
            "x-token": localStorage.getItem("token"),
          },
        })
        .then((res) => {
          if (res.data) {
            setMessage("Event created successfully");
            setModalShow(true);
          } else {
            setMessage("Event creation failed");
            setModalShow(true);
          }
          console.log(res.data);
        });
    } catch (err) {
      setMessage("Error submitting form");
      setModalShow(true);
      console.error("Error in handleLogin:", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleLogin();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (reader.result) {
          setFormData({ ...formData, image: reader.result });
        }
      };
      reader.onerror = (error) => {
        console.log("Error: ", error);
      };
    }
  };

  if (!localStorage.getItem("token")) {
    return <Navigate to="/signin" />;
  }

  return (
    <div>
      <div>
        <AfterLogin />
      </div>
      <div className="bg-body-secondary p-3 back" style={{ height: "135vh" }}>
        <div className="container" style={{ marginTop: "100px" }}>
          <div className="bg-dark text-light">
            <h1>
              <span style={{ color: "maroon" }}>C</span>reate
              <span style={{ color: "maroon" }}>E</span>vent
            </h1>
          </div>

          <Form
            className="p-3"
            style={{ borderRadius: "20px" }}
            onSubmit={handleSubmit}
          >
            <Form.Group className="mb-3" controlId="formOrganizer">
              <Form.Label>Organizer Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Organizer name"
                name="organizer"
                onChange={changeHandler}
                required
              />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formEventName">
                <Form.Label>Event Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter event name"
                  name="title"
                  onChange={changeHandler}
                  required
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formDate">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="date"
                  name="date"
                  onChange={changeHandler}
                  required
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formTime">
                <Form.Label>Time</Form.Label>
                <Form.Control
                  type="text"
                  name="time"
                  onChange={changeHandler}
                  required
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formLocation">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Event location"
                name="location"
                onChange={changeHandler}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Description"
                name="description"
                onChange={changeHandler}
                required
              />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formCity">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  name="city"
                  onChange={changeHandler}
                  // required
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formState">
                <Form.Label>State</Form.Label>
                <Form.Control
                  type="text"
                  name="state"
                  onChange={changeHandler}
                  //required
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control
                  type="text"
                  name="zip"
                  onChange={changeHandler}
                  //required
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Upload Event Poster</Form.Label>
                <Form.Control
                  name="image"
                  type="file"
                  onChange={handleFileChange}
                />
              </Form.Group>
              <h6>OR</h6>
              <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Provide Poster Link</Form.Label>
                  <Form.Control
                    name="image"
                    type="text"
                    onChange={changeHandler}
                  />
                </Form.Group>

              <Form.Group
                as={Col}
                controlId="formPoster"
                className="mb-3 mt-2"
                id="formGridCheckbox"
              >
                <Form.Check
                  type="checkbox"
                  label="I'll accept the Terms and Conditions"
                  className="d-flex justify-content-start gap-2"
                  required
                />
              </Form.Group>
            </Row>
            {/* {message && (
              <div
                className={
                  message.includes("failed") ? "text-danger" : "text-success"
                }
              >
                {message}
              </div>
            )} */}
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
            <Button variant="dark" type="submit" style={{ width: "25%" }}>
              Create
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
