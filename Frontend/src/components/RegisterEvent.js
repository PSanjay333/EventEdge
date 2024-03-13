import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
// import html2canvas from "html2canvas";
import "./ticket.css";
import AfterLogin from "./AfterLogin";
// import axios from "axios";

const RegisterEvent = () => {
  const location = useLocation();
  const componentRef = useRef();
  const event = location.state.data;

  // const Register = async()=>{
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:5000/registered",
  //       {},
  //       {
  //         params: { event_id: event._id },
  //         headers: {
  //           "x-token": localStorage.getItem("token"),
  //         },
  //       }
  //     );
  //     console.log(response.data);
  //     if (response.data) {
  //       alert("Event Registration Successful");
  //     } else {
  //       alert("Error in Registering the Event");
  //     }
  //   } catch (error) {
  //     console.error("Error in Register:", error);
  //   }
  // }


  // useEffect(() => {
  //   console.log("RegisterEvent component rendered");
  //   Register(); 
  // });


  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "EventTicket",
  });

  return (
    <div>
      <div>
        <AfterLogin />
      </div>
      <div
        className="container d-flex justify-content-center"
        style={{ marginTop: "300px" }}
      >
        <article ref={componentRef} className="card">
          <section className="date">
            <time dateTime="23th feb">
              <span
                style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                  textAlign: "right",
                  fontSize: "20px",
                  color: "maroon",
                }}
              >
                EventEdge
              </span>
            </time>
          </section>
          <section className="card-cont">
            <small>{event.title}</small>
            <h3>Organized by {event.organizer}</h3>
            <div className="even-date">
              <i className="fa fa-calendar"></i>
              <time>
                <span>{event.date}</span>
                <span>{event.time}</span>
              </time>
            </div>
            <div className="even-info">
              <i className="fa fa-map-marker"></i>
              <p>
                {event.location},{event.city},{event.state}
              </p>
            </div>
          </section>
        </article>
      </div>
      <div className="container">
        <button className="btn btn-dark m-3" onClick={handlePrint}>
          Download ticket
        </button>
      </div>
    </div>
  );
};

export default RegisterEvent;
