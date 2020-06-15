import React from "react";
import { addAction } from "./actions/"; // change action name and possibly file path
import { connect } from "react-redux";

const App = (props) => {
  return (
    <div className="App">
      // add components here props are now equal to state
    </div>
  )};
const mapStateToProps = (state) = {
  return {
    storeProps: state
}};
//change addAction to the action name
export default connect(mapStateToProps, {addAction})(App) ;
