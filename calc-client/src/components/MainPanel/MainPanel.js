import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDivide,
  faPlus,
  faTimes,
  faMinus,
  faEquals,
} from "@fortawesome/free-solid-svg-icons";

import "bootstrap/dist/css/bootstrap.min.css";
import "./MainPanel.css";

function MainPanel() {
  const buttonPress = (value) => {
    document.getElementById("txtExpress").value =
      document.getElementById("txtExpress").value + value;
    console.log(value);
  };

  return (
    <div className="MainPanel">
      <div></div>

      <Container fluid="xxl">
        <Row>
          <Col>
            <Form.Control
              className="txtExpression"
              id="txtExpress"
              placeholder="Digitar expressão"
            />
          </Col>
          <Col>
            <label className="resultLabel">
              <b>0</b>
            </label>
          </Col>
        </Row>
        <Row>
          <Col sm>
            <Button variant="outline-dark" className="btnMainPanel">
              <b>(</b>
            </Button>
          </Col>
          <Col sm>
            <Button variant="outline-dark" className="btnMainPanel">
              <b>)</b>
            </Button>
          </Col>
          <Col sm>
            <Button variant="outline-dark" className="btnMainPanel">
              <b>C</b>
            </Button>
          </Col>
          <Col sm>
            <Button variant="outline-dark" className="btnMainPanel">
              <FontAwesomeIcon icon={faDivide} />
            </Button>
          </Col>
        </Row>
        <Row>
          <Col sm>
            <Button
              variant="outline-dark"
              className="btnMainPanel"
              onClick={() => buttonPress("7")}
            >
              <b>7</b>
            </Button>
          </Col>
          <Col sm>
            <Button
              variant="outline-dark"
              className="btnMainPanel"
              onClick={() => buttonPress("8")}
            >
              <b>8</b>
            </Button>
          </Col>

          <Col sm>
            <Button
              variant="outline-dark"
              className="btnMainPanel"
              onClick={() => buttonPress("9")}
            >
              <b>9</b>
            </Button>
          </Col>

          <Col sm>
            <Button variant="outline-dark" className="btnMainPanel">
              <FontAwesomeIcon icon={faTimes} />
            </Button>
          </Col>
        </Row>
        <Row>
          <Col sm>
            <Button
              variant="outline-dark"
              className="btnMainPanel"
              onClick={() => buttonPress("4")}
            >
              <b>4</b>
            </Button>
          </Col>
          <Col sm>
            <Button
              variant="outline-dark"
              className="btnMainPanel"
              onClick={() => buttonPress("5")}
            >
              <b>5</b>
            </Button>
          </Col>
          <Col sm>
            <Button
              variant="outline-dark"
              className="btnMainPanel"
              onClick={() => buttonPress("6")}
            >
              <b>6</b>
            </Button>
          </Col>
          <Col sm>
            <Button variant="outline-dark" className="btnMainPanel">
              <FontAwesomeIcon icon={faMinus} />
            </Button>
          </Col>
        </Row>
        <Row>
          <Col sm>
            <Button
              variant="outline-dark"
              className="btnMainPanel"
              onClick={() => buttonPress("1")}
            >
              <b>1</b>
            </Button>
          </Col>
          <Col sm>
            <Button
              variant="outline-dark"
              className="btnMainPanel"
              onClick={() => buttonPress("2")}
            >
              <b>2</b>
            </Button>
          </Col>
          <Col sm>
            <Button
              variant="outline-dark"
              className="btnMainPanel"
              onClick={() => buttonPress("3")}
            >
              <b>3</b>
            </Button>
          </Col>
          <Col sm>
            <Button variant="outline-dark" className="btnMainPanel">
              <FontAwesomeIcon icon={faPlus} />
            </Button>
          </Col>
        </Row>
        <Row>
          <Col sm={3}></Col>

          <Col sm>
            <Button variant="outline-dark" className="btnMainPanel">
              <b>.</b>
            </Button>
          </Col>
          <Col xs lg="6">
            <Button variant="outline-dark" className="btnMainPanelEquals">
              <FontAwesomeIcon icon={faEquals} />
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MainPanel;