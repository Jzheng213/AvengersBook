import merge from 'lodash/merge';

import {LOG_POST_ERROR} from '../../actions/error_actions';


const postReducer = (state = [], action) => {

  Object.freeze(state);
  switch (action.type) {
  case LOG_POST_ERROR:
    return action.err.responseJSON;
  default:
    return state;
  }
};

export default postReducer;
