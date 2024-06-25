import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav"; 
import './Head.css'

const Head = () => {
  return (
    <div>
      <Navbar fixed="top" expand='lg' className="Navbar navbar-shrink">
        <Container>
          <Navbar.Brand href="/" className="d-flex justify-content-center align-items-center">
            {/* <img
              alt="logo"
              src={Hlogo}
              width="130"
              height="70"
              className="d-inline-block align-top"
              style={{ marginRight: '10px' ,borderRadius:'50px'}}
            />{" "} */}
            <strong style={{color:'black'}} className="fs-2 fst-italic"><span style={{ color: 'maroon',fontFamily:"'Lobster', sans-serif"}}>E</span>vent<span style={{ color: 'maroon',fontFamily:"'Lobster', sans-serif"}}>E</span>dge</strong>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" className="navbar-toggle-custom"/>
          <Navbar.Collapse id="navbarScroll" className="justify-content-end"> 
          <Nav variant="underline" expand="lg" navbarScroll>
            <Nav.Item>
              <Nav.Link href="/" className="text-green"><i className="fa-solid fa-house-user"></i> <b>Home</b></Nav.Link>
            </Nav.Item>
            {/* <Nav.Item>
              <Nav.Link href="/create" eventKey="/create" className="text-success">Create Event</Nav.Link>
            </Nav.Item> */}
            {/* <Nav.Item>
              <Nav.Link href="/browse" eventKey="/browse" className="text-success">Upcoming Events</Nav.Link>
            </Nav.Item> */}
            <Nav.Item>
              <Nav.Link href="#team" eventKey="/team" className="text-green">
              <i className="fa-solid fa-people-group"></i> <b>Team  </b>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href ="#contact" eventKey="/contact" className="text-green"><i className="fa-solid fa-address-book"></i> <b>Contact</b></Nav.Link>
            </Nav.Item>
            {/* <Nav.Item>
              <Button variant="dark" href="/login" className="Btn" style={{backgroundColor:'maroon'}}><b>Login/SignUp</b></Button>
            </Nav.Item> */}
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Head;

