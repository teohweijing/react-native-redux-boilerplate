import { combineReducers } from 'redux';

import { DATA_AVAILABLE } from '../actions';

let dataState = { data: [], loading: true };

const dataReducer = (state = dataState, action) => {

  switch (action.type) {
    case DATA_AVAILABLE:
      return {
        ...state,
        data: action.data, 
        loading: false,
      };
    default:
      return state;
  }

}

// Combine all the reducers
const rootReducer = combineReducers({
  dataReducer
  // [ANOTHER REDUCE], [ANOTHER REDUCER] ....
});

export default rootReducer;