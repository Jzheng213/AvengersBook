import merge from 'lodash/merge';

import {RECEIVE_POST, RECEIVE_POSTS, REMOVE_POST} from '../../actions/post_actions';


const postReducer = (state = {}, action) => {

  Object.freeze(state);
  switch (action.type) {
  case RECEIVE_POSTS:
    return action.payload.posts;
  case RECEIVE_POST:
    return merge({}, state, {[action.payload.post.id]: action.payload.post});
  case REMOVE_POST:
    let newState = merge({}, state);
    delete newState[action.id];
    return newState;
  default:
    return state;
  }
};

export default postReducer;
