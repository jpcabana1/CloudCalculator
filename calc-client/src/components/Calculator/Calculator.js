import MainPanel from "../MainPanel/MainPanel";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Calculator.css";

function Calculator() {
  return (
    <div className="Calculator">
      <div className="panel">
        <MainPanel />
      </div>
    </div>
  );
}

export default Calculator;
