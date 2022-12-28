import { BUY_CAKE } from "../Cakes/cakeTypes";
const initialState = {
  numOfCake: 10,
};
const CakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCake: state.numOfCake - 1,
      };
    default:
      return state;
  }
};
export default CakeReducer;
