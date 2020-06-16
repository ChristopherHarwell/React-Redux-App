import {
    FETCH_ANIME_TITLE_START, // change this to your action
    FETCH_ANIME_TITLE_SUCCESS, // change this to your action
    FETCH_ANIME_TITLE_FAILURE // change this to your action
  } from "../actions";
  
  const initialState = {
    films: [{
            id: "",
            title: "",
            description: "",
            director: "",
            producer: "",
            release_date: "",
            rt_score: "",
            people: [],
            locations: [],
            vehicles: [],
            url: "",
            length: null
        }], // change this property to your inital state and value for that state
    error: "",
    isFetching: false
  };
  
  function reducer(state = initialState, action) {
    switch (action.type) {
      case FETCH_ANIME_TITLE_START: // change this to your action
        return {
          ...state,
          isFetching: true //boolean to tell the app we are currently fetching data from the API
        };
      case FETCH_ANIME_TITLE_SUCCESS: // change this to your action
        return {
          ...state,
          error: "",
          isFetching: false,
          films: action.payload // change this property to your state property
        };
      case FETCH_ANIME_TITLE_FAILURE: // change this to your action
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