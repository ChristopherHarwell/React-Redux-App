import axios from "axios";

export const FETCH_ANIME_TITLE_START = "FETCH_START";  // change this to your action
export const FETCH_ANIME_TITLE_SUCCESS = "FETCH_SUCCESS";  // change this to your action
export const FETCH_ANIME_TITLE_FAILURE = "FETCH_FAILURE";  // change this to your action

export const getFilm = () => dispatch => {
  // the dispatch function is the thunk
  dispatch({ type: FETCH_ANIME_TITLE_START });  // change this to your action
  axios
    .get("https://ghibliapi.herokuapp.com/films/")
    .then(res => {
      /* whatever you want to do with the response */
      dispatch({ type: FETCH_ANIME_TITLE_SUCCESS,  // change this to your action
        payload: res.data }); // add the rest of the payload after res.data like res.data.results
    })
    .catch(err => {
      /* whatever ypu wamt to do with the error */
      dispatch({ type: FETCH_ANIME_TITLE_FAILURE,  // change this to your action
         payload: err.response.message }); // add the rest of the payload after err.response like err.response.data
    });
};