import merge from 'lodash/merge';

import {RECEIVE_COMMENT, RECEIVE_COMMENTS, REMOVE_COMMENT} from '../../actions/comment_actions';


const commentReducer = (state = {}, action) => {

  Object.freeze(state);
  switch (action.type) {
  case RECEIVE_COMMENTS:
    return action.comments;
  case RECEIVE_COMMENT:
    return merge({}, state, {[action.comment.id]: action.comment});
  case REMOVE_COMMENT:
    let newState = merge({}, state);
    delete newState[action.id];
    return newState;
  default:
    return state;
  }
};

export default commentReducer;
