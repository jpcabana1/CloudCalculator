import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faDivide,
  faPlus,
  faTimes,
  faMinus,
  faEquals,
  faBackspace,
} from "@fortawesome/free-solid-svg-icons";

import "bootstrap/dist/css/bootstrap.min.css";
import "./MainPanel.css";
import History from "../History/History";

const mainPanelButtonsStyleOutline = "outline-light";

function MainPanel() {
  const [result, setResult] = useState(0);
  const [expression, setExpression] = useState("");

  const buttonPress = (value) => {
    setExpression(expression + value);
  };

  const clear = () => {
    setExpression("");
    setResult(0);
  };

  const remove = () => {
    if (expression.length > 0) {
      const lastChar = expression[expression.length - 1];
      if (lastChar === " ") {
        setExpression(expression.substring(0, expression.length - 3));
      } else {
        setExpression(expression.substring(0, expression.length - 1));
      }
    }
  };

  const calculate = () => {
    if (expression === "") {
      setResult(0);
      return;
    }
    fetch("http://localhost:8080/api/Operation", {
      method: "POST",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
        propOperation: expression,
      },
    })
      .then((res) => res.json())
      .then((response) => {
        setResult(response.result);
      })
      .catch((err) => setResult(0));
  };

  return (
    <Container>
      {/* Histórico */}
      <Row>
        <History />
      </Row>
      {/* Resultado */}
      <Row>
        <Col>
          <label className="result">
            <b>{result}</b>
          </label>
          <br />
        </Col>
      </Row>
      {/* Expressão */}
      <Row>
        <Col>
          <label className="expression" id="exp">
            {"> "} {expression}
          </label>
          <br />
        </Col>
      </Row>
      {/* Botões */}
      <Row>
        <div className="MainPanel">
          <Button
            className="btnNumber"
            variant={mainPanelButtonsStyleOutline}
            onClick={() => buttonPress("(")}
          >
            (
          </Button>
          <Button
            className="btnNumber"
            variant={mainPanelButtonsStyleOutline}
            onClick={() => buttonPress(")")}
          >
            )
          </Button>
          <Button
            className="btnNumber"
            variant={mainPanelButtonsStyleOutline}
            onClick={clear}
          >
            <b>C</b>
          </Button>
          <Button
            className="btnNumber"
            variant={mainPanelButtonsStyleOutline}
            onClick={remove}
          >
            <FontAwesomeIcon icon={faBackspace} />
          </Button>
          <br />

          <Button
            className="btnNumber"
            variant={mainPanelButtonsStyleOutline}
            onClick={() => buttonPress("7")}
          >
            7
          </Button>
          <Button
            className="btnNumber"
            variant={mainPanelButtonsStyleOutline}
            onClick={() => buttonPress("8")}
          >
            8
          </Button>
          <Button
            className="btnNumber"
            variant={mainPanelButtonsStyleOutline}
            onClick={() => buttonPress("9")}
          >
            9
          </Button>
          <Button
            className="btnNumber"
            variant={mainPanelButtonsStyleOutline}
            onClick={() => buttonPress(" + ")}
          >
            <FontAwesomeIcon icon={faPlus} />
          </Button>
          <br />

          <Button
            className="btnNumber"
            variant={mainPanelButtonsStyleOutline}
            onClick={() => buttonPress("4")}
          >
            4
          </Button>
          <Button
            className="btnNumber"
            variant={mainPanelButtonsStyleOutline}
            onClick={() => buttonPress("5")}
          >
            5
          </Button>
          <Button
            className="btnNumber"
            variant={mainPanelButtonsStyleOutline}
            onClick={() => buttonPress("6")}
          >
            6
          </Button>
          <Button
            className="btnNumber"
            variant={mainPanelButtonsStyleOutline}
            onClick={() => buttonPress(" - ")}
          >
            <FontAwesomeIcon icon={faMinus} />
          </Button>
          <br />
          <Button
            className="btnNumber"
            variant={mainPanelButtonsStyleOutline}
            onClick={() => buttonPress("1")}
          >
            1
          </Button>
          <Button
            className="btnNumber"
            variant={mainPanelButtonsStyleOutline}
            onClick={() => buttonPress("2")}
          >
            2
          </Button>
          <Button
            className="btnNumber"
            variant={mainPanelButtonsStyleOutline}
            onClick={() => buttonPress("3")}
          >
            3
          </Button>
          <Button
            className="btnNumber"
            variant={mainPanelButtonsStyleOutline}
            onClick={() => buttonPress(" * ")}
          >
            <FontAwesomeIcon icon={faTimes} />
          </Button>
          <br />
          <Button
            className="btnNumber"
            variant={mainPanelButtonsStyleOutline}
            onClick={() => buttonPress(".")}
          >
            .
          </Button>
          <Button
            className="btnNumber"
            variant={mainPanelButtonsStyleOutline}
            onClick={() => buttonPress("0")}
          >
            0
          </Button>
          <Button
            className="btnNumber"
            variant={mainPanelButtonsStyleOutline}
            onClick={calculate}
          >
            <FontAwesomeIcon icon={faEquals} />
          </Button>
          <Button
            className="btnNumber"
            variant={mainPanelButtonsStyleOutline}
            onClick={() => buttonPress(" / ")}
          >
            <FontAwesomeIcon icon={faDivide} />
          </Button>
          <br />
        </div>
      </Row>
    </Container>
  );
}

export default MainPanel;
