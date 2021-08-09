import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

import Calculator from "./components/Calculator/Calculator";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Container fluid>
        <Row>
          <Col sm="auto">
            <Header />
          </Col>
        </Row>
        <Row>
          <Col sm="auto">
            <div className="comps">
              <Calculator />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default App;
