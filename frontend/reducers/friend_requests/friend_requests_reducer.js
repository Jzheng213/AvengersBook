import merge from 'lodash/merge';

import { RECEIVE_FRIEND_REQUEST, RECEIVE_FRIEND_REQUESTS} from '../../actions/friend_request_actions';
import { RECEIVE_PAIR } from '../../actions/user_actions';
const friendRequestReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
  case RECEIVE_FRIEND_REQUESTS:
    return action.friendRequests;
  case RECEIVE_FRIEND_REQUEST:
    return merge({}, state, {[action.friendRequest.id]:action.friendRequest});
  case RECEIVE_PAIR:

    return action.friendRequests;
  default:
    return state;

  }
};

export default friendRequestReducer;
