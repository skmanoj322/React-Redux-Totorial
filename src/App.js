import logo from "./logo.svg";
import "./App.css";
import redux from "redux";
import { legacy_createStore as createStore } from "redux";
import CakeComponents from "./components/CakeComponent";

function App() {
  return (
    <div className="App">
      <CakeComponents />
    </div>
  );
}

export default App;
