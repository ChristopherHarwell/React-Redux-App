import {
    FETCH_YOUR_ACTION_START, // change this to your action
    FETCH_YOUR_ACTION_SUCCESS, // change this to your action
    FETCH_YOUR_ACTION_FAILURE // change this to your action
  } from "../actions";
  
  const initialState = {
    yourInitialState: [], // change this property to your inital state and value for that state
    error: "",
    isFetching: false
  };
  
  function reducer(state = initialState, action) {
    switch (action.type) {
      case FETCH_YOUR_ACTION_START: // change this to your action
        return {
          ...state,
          isFetching: true //boolean to tell the app we are currently fetching data from the API
        };
      case FETCH_YOUR_ACTION_SUCCESS: // change this to your action
        return {
          ...state,
          error: "",
          isFetching: false,
          yourInitialState: action.payload // change this property to your state property
        };
      case FETCH_YOUR_ACTION_FAILURE: // change this to your action
        return {
          ...state,
          error: action.payload,
          isFetching: false
        };
      default:
        return state;
    }
  }
  
  export default reducer;