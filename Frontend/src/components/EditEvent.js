import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import AfterLogin from "./AfterLogin";
import axios from "axios";
// import Alert from "react-bootstrap/Alert";
import { Navigate, useLocation } from "react-router-dom";
import AlertBox from "./AlertBox";

const EditEvent = () => {
  const location = useLocation();
  const event = location.state.data;
  const [modalShow, setModalShow] = useState(false);
  const [message, setMessage] = useState("");

  const [data, setData] = useState({
    title: event.title || "",
    date: event.date || "",
    time: event.time || "",
    location: event.location || "",
    description: event.description || "",
    organizer: event.organizer || "",
    city: event.city || "",
    state: event.state || "",
    image: event.image || "",
    event_id: event._id,
  });

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        "http://localhost:5000/edit",
        { ...data },
        {
          headers: {
            "x-token": localStorage.getItem("token"),
          },
        }
      );
      console.log(response.data);
      if (response.data) {
        setMessage("Event Updated Successfully");
        setModalShow(true);
      } else {
        setMessage("Error in Updating Event");
        setModalShow(true);
      }
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
        setData({ ...data, image: reader.result });
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
            <span style={{ color: "maroon" }}>E</span>vent
          </h1>
        </div>
        <Form onSubmit={handleUpdate}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Event title"
                name="title"
                onChange={changeHandler}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="date"
                name="date"
                onChange={changeHandler}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Time</Form.Label>
              <Form.Control
                type="text"
                placeholder="time"
                name="time"
                onChange={changeHandler}
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Organizer Name</Form.Label>
            <Form.Control
              placeholder="Name"
              name="organizer"
              onChange={changeHandler}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              placeholder="Description"
              name="description"
              onChange={changeHandler}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="location"
              name="location"
              onChange={changeHandler}
            />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="city"
                name="city"
                onChange={changeHandler}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="state"
                name="state"
                onChange={changeHandler}
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Update Event Photo</Form.Label>
            <Form.Control
              type="file"
              placeholder=""
              name="image"
              onChange={handleFileChange}
            />
          </Form.Group>
          <h6>OR</h6>
          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Provide Event Poster Link </Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              name="image"
              onChange={changeHandler}
            />
          </Form.Group>

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

export default EditEvent;
