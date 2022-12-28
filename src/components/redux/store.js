import { createStore } from "redux";
import CakeReducer from "./Reducer/CakeReducer";
const store = createStore(CakeReducer);
export default store;
