import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const AlertBoxBefore = ({ message, show, onHide }) => {
  return (
    <div>
      <Modal show={show} onHide={onHide} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
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
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>{message}</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={onHide}
            style={{ backgroundColor: "maroon" }}
            href="/signin"
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AlertBoxBefore;
