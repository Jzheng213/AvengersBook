import merge from 'lodash/merge';

import { RECEIVE_POST, RECEIVE_POSTS } from '../../actions/post_actions';
import { RECEIVE_COMMENT, REMOVE_COMMENT } from '../../actions/comment_actions';

const commentReducer = (state = {}, action) => {

  Object.freeze(state);
  switch (action.type) {
  case RECEIVE_POSTS:
    return merge({}, action.payload.comments);
  case RECEIVE_POST:
    return merge({}, state, {[action.payload.comment.id]: action.payload.comment});
  case RECEIVE_COMMENT:
    return merge({}, state, {[action.payload.comment.id]: action.payload.comment});
  case REMOVE_COMMENT:
    let newState = merge({}, state);
    delete newState[action.id];
    return newState;
  default:
    return state;
  }
};

export default commentReducer;
