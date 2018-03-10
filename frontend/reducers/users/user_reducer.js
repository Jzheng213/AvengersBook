import merge from 'lodash/merge';

import { RECEIVE_USER, RECEIVE_USERS } from '../../actions/user_actions';

const _nullUser = Object.freeze({
  user: null
});

const userReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
  case RECEIVE_USERS:
    return action.users;
  case RECEIVE_USER:
    return merge({}, state, {[action.user.id]: action.user});
  default:
    return state;
  }
};

export default userReducer;
