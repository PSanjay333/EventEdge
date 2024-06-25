import React from 'react'
// import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook} from '@fortawesome/free-brands-svg-icons';
import Button from "react-bootstrap/Button"; 
import './Head.css'
const Footers = () => {
  return (
    <div>
        <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top Jum-foot">
          <div className="col-md-4 d-flex align-items-center">
            <span className="mb-3 mb-md-0" style={{color:'maroon'}}>
              © 2023 EventEdge, Inc
            </span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              {/* <a className="text-body-secondary" href="#">
                <svg className="bi" width="24" height="24">
                  <use xlink:href="#twitter"></use>
                </svg>
              </a> */}
              <Button variant='tabs' className='rounded-circle' href="/">
              <FontAwesomeIcon icon={faInstagram} size='2xl' />
              </Button>
            </li>
            <li className="ms-3">
              {/* <a className="text-body-secondary" href="#">
                <svg className="bi" width="24" height="24">
                  <use xlink:href="#instagram"></use>
                </svg>
              </a> */}
            </li>
            <li className="ms-3">
              {/* <a className="text-body-secondary" href="#">
                <svg className="bi" width="24" height="24">
                  <use xlink:href="#facebook"></use>
                </svg>
              </a> */}
              <Button variant='tabs' className='rounded-circle' href='/'>
              <FontAwesomeIcon icon={faFacebook} size="2xl" />
              </Button>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  )
}

export default Footers