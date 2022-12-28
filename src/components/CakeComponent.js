import React from "react";
import { buyCake } from "./redux/Cakes/cakeAction";
import { connect } from "react-redux";
const CakeComponents = (props) => {
  return (
    <div>
      <h2>Number of cakes{props.numOfCake}</h2>
      <button onClick={props.buyCake}>Buy cake</button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    numOfCake: state.numOfCake,
  };
};
const mapDispatchToProps = (dispatch) => {
  return { buyCake: () => dispatch(buyCake()) };
};
export default connect(mapStateToProps, mapDispatchToProps)(CakeComponents);
