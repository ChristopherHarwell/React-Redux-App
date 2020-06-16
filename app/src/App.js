import React from "react";
import { getFilm } from "./actions/"; // change action name and possibly file path
import { connect } from "react-redux";
import AnimeList from "./components/AnimeList";

const App = (props) => {
    const fetchFilm = (event) => {
    event.preventDefault();
    props.getFilm();
  };
  return (
    <div className="App">
      // add components here props are now equal to state

      <AnimeList films={props.storeProps} url={props.storeProps.url} name={props.storeProps.title}/>
      <button onClick={fetchFilm}>Fetch Film</button>
    </div>
    
  )};
const mapStateToProps = (state) => {
  console.log(state.films)
  return {
    storeProps: state.films
}};
//change addAction to the action name
export default connect(mapStateToProps, {getFilm})(App) ;
