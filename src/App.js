import logo from "./logo.svg";
import "./App.css";
import redux from "redux";
import { legacy_createStore as createStore } from "redux";

function App() {
  const createStore = redux.legacy_createStore;
  const BUY_CAKE = "BUY_CAKE";
  function buycake() {
    return {
      type: BUY_CAKE,
      info: "Frist redux action",
    };
  }
  const initialState = {
    numOfCakes: 10,
  };
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case BUY_CAKE:
        return {
          ...state,
          numOfCakes: state.num,
        };
      default:
        return state;
    }
  };
  const store = createStore(reducer);
  const showState = () => {
    console.log("Initial State", store.getState());
  };
  return (
    <div className="App">
      <button onClick={showState}>click</button>
    </div>
  );
}

export default App;
