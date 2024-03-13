import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import "./Head.css";
import AlertBox from "./AlertBox";
// import { Link } from "react-router-dom";

const UserCreatedEvents = () => {
  // const [delEvent, SetDelEvent] = useState({
  //   event_id: "",
  // });
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/myevents", {
          headers: {
            "x-token": localStorage.getItem("token"),
          },
        });
        setData(response.data.allEvents);
        console.log(response.data.allEvents);
      } catch (err) {
        console.error("Error", err);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (event) => {
    console.log("Delete event request 1 client");
    // SetDelEvent(event._id);
    try {
      const response = await axios.delete(
        "http://localhost:5000/delete",
        {
          params: { event_id: event._id },
          headers: {
            "x-token": localStorage.getItem("token"),
          },
        }
      );
      console.log(response.data);
      if (response.data) {
        setMessage("Event Deleted Successfully");
        setModalShow(true);
      } else {
        setMessage("Error in Deleting the Event");
        setModalShow(true);
      }
    } catch (error) {
      console.error("Error in Deletion:", error);
    }
  };

  if (!localStorage.getItem("token")) {
    return <Navigate to="/signin" />;
  }

  const handleRegister = (event) => {
    console.log("Event data before navigation:", event);
    navigate("/edit", { state: { data: event } });
  };

  return (
    <div className="bg-body-tertiary">
      <h2 className="text-green">Your Events</h2>
      <hr />
      {data.length!==0?<div className="container table-responsive large">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">S.no</th>
              <th scope="col">Title</th>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
              <th scope="col">Location</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((event, index) => (
              <tr key={event._id}>
                <td>{index + 1}</td>
                <td>{event.title}</td>
                <td>{event.date}</td>
                <td>{event.time}</td>
                <td>
                  {event.location},{event.city},{event.state}
                </td>
                <td>
                  <button
                    className="btn btn-dark"
                    style={{ backgroundColor: "black" }}
                    onClick={() => handleRegister(event)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-dark"
                    style={{ backgroundColor: "black" }}
                    onClick={() => handleDelete(event)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>:(
        <h5>You haven't created any events</h5>
      )}
      {modalShow && (
            <AlertBox
              message={message}
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          )}
    </div>
  );
};

export default UserCreatedEvents;
