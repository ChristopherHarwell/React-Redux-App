import React from "react";
import { getFilm } from "./actions/"; // change action name and possibly file path
import { connect } from "react-redux";
import AnimeList from "./components/AnimeList";
import { Button } from "@material-ui/core";

const App = (props) => {
    const fetchFilm = (event) => {
    event.preventDefault();
    props.getFilm();
  };
  return (
    <div className="App">
      <AnimeList films={props.storeProps} url={props.storeProps.url} name={props.storeProps.title}/>
      <Button variant="outlined" style={{borderColor: "#FFFFF0", color: "#FFFFF0", backgroundColor: "#40E0D0"}} onClick={fetchFilm}>Fetch Film</Button>
    </div>
    
  )};
const mapStateToProps = (state) => {
  console.log(state.films)
  return {
    storeProps: state.films
}};
//change addAction to the action name
export default connect(mapStateToProps, {getFilm})(App) ;
