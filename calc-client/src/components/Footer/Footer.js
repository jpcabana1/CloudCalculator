import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faDocker } from "@fortawesome/free-brands-svg-icons";
import Hexagon from "../hexagon/hexagon";
import "./Footer.css";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

const color = "#6692cc";

function Footer() {
  return (
    <footer className="footer">
      <Row className="justify-content-md-center">
        <Col sm="auto">
          <div>
            <label className="lblDesc">
              <b>Developed by jpcabana1</b>
            </label>
          </div>
        </Col>
        <Col sm="auto">
          <FontAwesomeIcon
            className="react"
            icon={faReact}
            size="4x"
            color={color}
          />
        </Col>
        <Col sm="auto">
          <Hexagon />
        </Col>
        <Col sm="auto">
          <FontAwesomeIcon className="docker" icon={faDocker} size="4x" />
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;
