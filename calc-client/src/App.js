import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import "./App.css";
import Calculator from "./components/Calculator/Calculator";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
function App() {
  return (
    <div className="app">
      <div className="panel">
        <Container fluid>
          <Row>
            <Header />
            <Calculator />
            <Footer />
          </Row>
        </Container>
      </div>
    </div>
  );
}
export default App;
