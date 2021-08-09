import React from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

import "./History.css";

function History(props) {
  return (
    <div className="hist">
      <Button variant="primary" onClick={props.handleShow}>
        Launch
      </Button>

      <Offcanvas show={props.show} onHide={props.handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default History;
