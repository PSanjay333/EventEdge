import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate} from "react-router-dom";
import AfterLogin from "./AfterLogin";
import { Row, FormControl, InputGroup } from "react-bootstrap";
// import UserRegEvents from "./UserRegEvents";
import "./Head.css";
import "./Events.css";
import AlertBox from "./AlertBox";
// import AlertBox from "./AlertBox";


const BrowseEvent = () => {
  const [modalShow, setModalShow] = useState(false);
  const [msg,setMsg] = useState(null)
  const navigate = useNavigate()
  const [data, setData] = useState([]);
  // const [eventData, setEvent] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/Events", {
        headers: {
          "x-token": localStorage.getItem("token"),
        },
      })
      .then((res) => {
        // console.log(res.data)
        setData(res.data);
      });
  },[]);

  if (!localStorage.getItem("token")) {
    return <Navigate to="/signin" />;
  }

  const handleRegister = async(event) => {
    console.log("Event data before navigation:", event);
    try {
          const response = await axios.post(
            "http://localhost:5000/registered",
            {},
            {
              params: { event_id: event._id },
              headers: {
                "x-token": localStorage.getItem("token"),
              },
            }
          );
          console.log(response.data.message);
          if(response.data.message==="Already registered for this event"){
            setMsg("You've already registered");
            setModalShow(true)
            return
          }
          else if (response.data.message==="Event Registered successfully") {
            setMsg("Event Registration Successful");
            navigate("/register", { state: { data: event } });
            return

          } else {
            setMsg("Error in Registering the Event");
            setModalShow(true)
            return
          }
        } catch (error) {
          console.error("Error in Register:", error);
        }
  };

  
  // Filter events based on the search term
  const filteredEvents = data.filter(
    (event) =>
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.time.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.state.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="">
      <div>
        <AfterLogin />
      </div>
      <div
        className="browse"
        style={{
          marginTop: "70px",
          boxShadow: " 0 5px 15px rgba(0,0,0,.25)",
          width: "100%",
        }}
      >
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-bold text-black">
                <span style={{ color: "maroon", textShadow: " 0 5px 7px" }}>
                  Search
                </span>{" "}
                for the{" "}
                <span style={{ color: "maroon", textShadow: " 0 5px 7px" }}>
                  Upcoming
                </span>{" "}
                Events
              </h1>
              <p>
                <div className="d-flex justify-content-center mt-5 pt-5">
                  <InputGroup className="w-100">
                    <FormControl
                      type="search"
                      placeholder="Search by title or date..."
                      aria-label="Search"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </InputGroup>
                </div>
              </p>
            </div>
          </div>
        </section>
      </div>
      <br />
      {data.length !== 0 ? (
        <>
        <Row
          xs={1}
          md={3}
          className="d-flex justify-content-center mx-auto gap-4"
        >
          {searchTerm === ""
            ? data.map((event) => (
                <div key={event.id} className="productCard">
                  <img
                    src={event.image}
                    alt="Event poster"
                    className="productImage"
                  ></img>

                  <div className="productCard__content">
                    <h3 className="productName">{event.title}</h3>
                    <div className="displayStack__1">
                      <div className="productSales">
                        <span>
                          <span style={{ color: "maroon", fontWeight: "bold" }}>
                            Date:{" "}
                          </span>
                          {event.date}
                        </span>
                      </div>
                      <div className="productPrice">
                        <span>
                          <span style={{ color: "maroon", fontWeight: "bold" }}>
                            Time:{" "}
                          </span>
                          {event.time}
                        </span>
                      </div>
                      <div className="productlocation">
                        <span>
                          <span style={{ color: "maroon", fontWeight: "bold" }}>
                            Location:{" "}
                          </span>
                          {event.location +
                            "," +
                            event.city +
                            "," +
                            event.state}
                        </span>
                      </div>
                    </div>
                    {/* <Link
                      to="/register"
                      className="btn btn-dark card-btn"
                      style={{ backgroundColor: "maroon" }}
                      onClick={() => handleRegister(event)}
                    >
                      Register
                    </Link> */}
                    <button
                      className="btn btn-dark"
                      style={{ backgroundColor: "maroon" }}
                      onClick={() => {handleRegister(event);
                        }}
  
                    >
                      Register
                    </button>
                  </div>
                </div>
              ))
            : filteredEvents.map((event) => (
                <div key={event.id} className="productCard">
                  <img
                    src={event.image}
                    alt="product-img"
                    className="productImage"
                  ></img>

                  <div className="productCard__content">
                    <h3 className="productName">{event.title}</h3>
                    <div className="displayStack__1">
                      <div className="productSales">
                        <span>
                          <span style={{ color: "maroon", fontWeight: "bold" }}>
                            Date:{" "}
                          </span>
                          {event.date}
                        </span>
                      </div>
                      <div className="productPrice">
                        <span>
                          <span style={{ color: "maroon", fontWeight: "bold" }}>
                            Time:{" "}
                          </span>
                          {event.time}
                        </span>
                      </div>
                      <div className="productlocation">
                        <span>
                          <span style={{ color: "maroon", fontWeight: "bold" }}>
                            Location:{" "}
                          </span>
                          {event.location}
                        </span>
                      </div>
                    </div>
                    {/* <Link
                      to="/register"
                      className="btn btn-dark card-btn"
                      style={{ backgroundColor: "maroon" }}
                      onClick={() => handleRegister(event)}
                    >
                      Register
                    </Link> */}
                    <button
                      className="btn btn-dark card-btn"
                      style={{ backgroundColor: "maroon" }}
                      onClick={() => {handleRegister(event);
                        }}
                    >
                      Register
                    </button>
                  </div>
                </div>
              ))}
        </Row>
        {modalShow && (
            <AlertBox
              message={msg}
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          )}
        </>
      ) : (
        <h5>Please wait Loading...</h5>
      )}
    </div>
  );
};

export default BrowseEvent;
