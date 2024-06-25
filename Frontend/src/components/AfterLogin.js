import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import axios from 'axios'
import { Navigate } from "react-router-dom";
import React,{useState,useEffect} from 'react'

import "./Head.css";
// import { Navigate } from "react-router-dom";

const AfterLogin = () => {
  const [data,setData] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:5000/myprofile',{
      headers:{
        'x-token':localStorage.getItem('token')
      }
    }).then(res => {setData(res.data);})
  },[data])
  if(!localStorage.getItem('token')){
    return <Navigate to="/signin"/>
  }
  const Logout = () => {
    localStorage.removeItem("token");
  };
  return (
    <div>
      <Navbar fixed="top" expand="md" className="Navbar">
        <Container>
          <Navbar.Brand
            href="/"
            className="d-flex justify-content-center align-items-center"
          >
            {/* <img
              alt="logo"
              src={Hlogo}
              width="130"
              height="70"
              className="d-inline-block align-top"
              style={{ marginRight: '10px' ,borderRadius:'50px'}}
            />{" "} */}
            <strong style={{ color: "black" }} className="fs-2 fst-italic">
              {" "}
              <span
                style={{ color: "maroon", fontFamily: "'Lobster', sans-serif" }}
              >
                E
              </span>
              vent
              <span
                style={{ color: "maroon", fontFamily: "'Lobster', sans-serif" }}
              >
                E
              </span>
              dge
            </strong>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="justify-content-end">
            <Nav variant="underline" expand="lg" navbarScroll>
              {/* <Nav.Item>
              <Nav.Link href="/" className="text-success">Home</Nav.Link>
            </Nav.Item> */}
              {/* <Nav.Item>
                <Nav.Link
                  href="/create"
                  eventKey="/create"
                  className="text-green"
                >
                  <i className="fa-solid fa-plus"></i> <b>Create Event</b>
                </Nav.Link>
              </Nav.Item> */}
              {/* <Nav.Item>
                <Nav.Link
                  href="/browse"
                  eventKey="/browse"
                  className="text-green"
                >
                  <i className="fa-solid fa-calendar-days"></i>{" "}
                  <b>Upcoming Events</b>
                </Nav.Link>
              </Nav.Item> */}
              {/* <Nav.Item>
              <Nav.Link href="#team" eventKey="/team" className="text-success">
                Team
              </Nav.Link>
            </Nav.Item> */}
              {/* <Nav.Item>
              <Nav.Link href ="/about" eventKey="/about" className="text-success">About us</Nav.Link>
            </Nav.Item> */}
              {/* <Nav.Item>
              <Button variant="dark" href='/signin'  onClick={Logout} style={{backgroundColor:'maroon'}}><b>Logout</b></Button>
            </Nav.Item> */}
              <Nav.Item>
                <NavDropdown
                  title={
                    <>
                      <i class="fa-solid fa-circle-user"></i> MyProfile
                    </>
                  }
                  className="navbar-custom"
                >
                  <NavDropdown.Item eventKey="4.1" href="/dashboard">
                      <b>{data.username}</b>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item eventKey="4.2" href="/create">
                    {" "}
                    <i className="fa-solid fa-plus"></i> <b>Create Event</b>
                  </NavDropdown.Item>
                  <NavDropdown.Item eventKey="4.3" href="/browse">
                    <i className="fa-solid fa-calendar-days"></i>{" "}
                    <b>Upcoming Events</b>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    eventKey="4.4"
                    onClick={Logout}
                    href="/signin"
                  >
                    <i class="fa-solid fa-right-from-bracket"></i>{" "}
                    <b>SignOut</b>
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default AfterLogin;
