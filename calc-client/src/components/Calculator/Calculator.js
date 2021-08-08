import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import MainPanel from "../MainPanel/MainPanel";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Calculator.css";

function Calculator() {
  return (
    <div className="Calculator">
      <Container>
        <Row>
          <Col>
            <div className="panel">
              <MainPanel />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Calculator;
