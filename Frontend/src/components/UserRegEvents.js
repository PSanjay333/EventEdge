import React,{useState,useEffect} from 'react'
import axios from 'axios';
import AlertBox from './AlertBox';

const UserRegEvents = () => {
  const [data, setData] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/regEvents", {
          headers: {
            "x-token": localStorage.getItem("token"),
          },
        });
        setData(response.data.registeredEvents);
        console.log(response.data.registeredEvents);
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
        "http://localhost:5000/deletereg",
        {
          params: { event_id: event._id },
          headers: {
            "x-token": localStorage.getItem("token"),
          },
        }
      );
      console.log(response.data);
      if (response.data) {
        setMessage("Registration Cancelled");
        setModalShow(true);
      } else {
        setMessage("Error in cancelling registered event");
        setModalShow(true);
      }
    } catch (error) {
      console.error("Error in cancelling:", error);
    }
  };


  return (
    <div>

<div className="bg-body-tertiary">
      <h2 className="text-green">Registered Events</h2>
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
                    onClick={() => handleDelete(event)}
                  >
                    Cancel Registration
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>:(
        <h5>You haven't resgistered any events</h5>
      )}
      {modalShow && (
            <AlertBox
              message={message}
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          )}
    </div>
    </div>
  )
}

export default UserRegEvents