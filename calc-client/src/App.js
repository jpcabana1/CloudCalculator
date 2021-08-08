import "./App.css";
import Calculator from "./components/Calculator/Calculator";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
function App() {
  return (
    <div className="app">
      <Header />
      <Calculator />
      <Footer />
    </div>
  );
}
export default App;
