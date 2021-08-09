import { faHistory } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Offcanvas from "react-bootstrap/Offcanvas";

import "./History.css";

const buttonsStyle = "outline-warning";

function History() {
  const [showHistory, setShowHistory] = useState(false);

  const handleClose = () => setShowHistory(false);
  const handleShow = () => setShowHistory(true);

  return (
    <div className="histButton">
      <Button variant={buttonsStyle} onClick={handleShow}>
        <FontAwesomeIcon icon={faHistory} size="2x" />
      </Button>
      <Offcanvas show={showHistory} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>History</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Expression</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{"20 + 5 = 25"}</td>
                <td>{"2021-08-08T18:39:59.2882008"}</td>
              </tr>
              <tr>
                <td>{"9456 - 400 - 56 - 9000 = 0"}</td>
                <td>{"2021-08-08T18:39:59.2882008"}</td>
              </tr>
              <tr>
                <td>{"(30 * 10) + 200 = 500"}</td>
                <td>{"2021-08-08T18:39:59.2882008"}</td>
              </tr>
            </tbody>
          </Table>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default History;
