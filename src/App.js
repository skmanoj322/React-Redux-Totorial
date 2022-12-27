import logo from "./logo.svg";
import "./App.css";
import redux from "redux";
import { legacy_createStore as createStore } from "redux";
import CakeComponents from "./components/CakeComponent";
import { Provider } from "react-redux";
import store from "./components/redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeComponents />
      </div>
    </Provider>
  );
}

export default App;
