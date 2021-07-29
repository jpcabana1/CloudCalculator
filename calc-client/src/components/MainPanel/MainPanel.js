import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import "bootstrap/dist/css/bootstrap.min.css";
import "./MainPanel.css";

function MainPanel() {
  return (
    <div className="MainPanel">
      <Container fluid>
        <Row>
          <Col sm>
            <Button className="btnMainPanel">
              <b>7</b>
            </Button>
          </Col>
          <Col sm>
            <Button className="btnMainPanel">
              <b>8</b>
            </Button>
          </Col>
          <Col sm>
            <Button className="btnMainPanel">
              <b>9</b>
            </Button>
          </Col>
        </Row>
        <Row>
          <Col sm>
            <Button className="btnMainPanel">
              <b>4</b>
            </Button>
          </Col>
          <Col sm>
            <Button className="btnMainPanel">
              <b>5</b>
            </Button>
          </Col>
          <Col sm>
            <Button className="btnMainPanel">
              <b>6</b>
            </Button>
          </Col>
        </Row>
        <Row>
          <Col sm>
            <Button className="btnMainPanel">
              <b>1</b>
            </Button>
          </Col>
          <Col sm>
            <Button className="btnMainPanel">
              <b>2</b>
            </Button>
          </Col>
          <Col sm>
            <Button className="btnMainPanel">
              <b>3</b>
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MainPanel;
