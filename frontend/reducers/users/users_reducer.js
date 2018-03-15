import merge from 'lodash/merge';

import { RECEIVE_USER, RECEIVE_USERS, RECEIVE_PAIR } from '../../actions/user_actions';

const userReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
  case RECEIVE_USERS:
    return merge({}, state, action.users);
  case RECEIVE_USER:
    const newState = merge({}, state);
    delete newState[action.user.id];
    return merge({}, newState, {[action.user.id]: action.user});
  case RECEIVE_PAIR:
    debugger;
    const newStates = merge({}, state);
    Object.keys(action.users).forEach((id) => {
      delete newStates[id];
    });
    debugger;
    return merge({}, newStates, action.users);
  default:
    return state;
  }
};

export default userReducer;
