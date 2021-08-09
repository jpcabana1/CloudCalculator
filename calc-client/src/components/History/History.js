import { faHistory } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Offcanvas from "react-bootstrap/Offcanvas";

import "./History.css";

const buttonsStyle = "outline-warning";
const url = "http://localhost:8080/api/Operation";
function History() {
  const [showHistory, setShowHistory] = useState(false);
  const [history, setHistory] = useState([]);

  const update = () => {
    fetch(url)
      .then((res) => res.json())
      .then((response) => {
        setHistory(response.reverse());
      });
  };

  const handleClose = () => setShowHistory(false);

  const handleShow = () => {
    setShowHistory(true);
    update();
  };

  useEffect(() => {
    update();
  });

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
              {history.map((exp) => {
                return (
                  <tr key={exp.id}>
                    <td>{exp.operationData}</td>
                    <td>{exp.dateOperation}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default History;
