import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import MainPanel from "../MainPanel/MainPanel";
//import OperationTable from "../OperationTable/OperationTable";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Calculator.css";

function Calculator() {
  return (
    <div className="Calculator">
      <Container>
        <Row>
          <Col sm={8}>
            <MainPanel />
          </Col>
          {/* <Col sm={4}>
            <OperationTable />
          </Col> */}
        </Row>
      </Container>
    </div>
  );
}

export default Calculator;
