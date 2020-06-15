import axios from "axios";

export const FETCH_YOUR_ACTION_START = "FETCH_START";  // change this to your action
export const FETCH_YOUR_ACTION_SUCCESS = "FETCH_SUCCESS";  // change this to your action
export const FETCH_YOUR_ACTION_FAILURE = "FETCH_FAILURE";  // change this to your action

export const getSomeData = () => dispatch => {
  // the dispatch function is the thunk
  dispatch({ type: FETCH_YOUR_ACTION_START });  // change this to your action
  axios
    .get("your API endpoint goes here")
    .then(res => {
      /* whatever you want to do with the response */
      dispatch({ type: FETCH_YOUR_ACTION_SUCCESS,  // change this to your action
        payload: res.data }); // add the rest of the payload after res.data like res.data.results
    })
    .catch(err => {
      /* whatever ypu wamt to do with the error */
      dispatch({ type: FETCH_YOUR_ACTION_FAILURE,  // change this to your action
         payload: err.response }); // add the rest of the payload after err.response like err.response.data
    });
};