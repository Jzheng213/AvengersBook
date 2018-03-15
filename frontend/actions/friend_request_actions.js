import * as APIUtilFriends from '../util/friend_api_util';

export const RECEIVE_FRIEND_REQUESTS = 'RECEIVE_FRIEND_REQUESTS';
export const RECEIVE_FRIEND_REQUEST = 'RECEIVE_FRIEND_REQUEST';

const receiveFriendRequests = friendRequests => {
  return {
    type: RECEIVE_FRIEND_REQUESTS,
    friendRequests
  };
};

const receiveFriendRequest = friendRequest => {
  return {
    type: RECEIVE_FRIEND_REQUEST,
    friendRequest
  };
};

export const fetchFriendRequests = (id) => dispatch => {
  APIUtilFriends.fetchFriendRequests(id).then((friendRequestsFromServer) =>{
    return dispatch(receiveFriendRequests(friendRequestsFromServer));
  });
};

export const fetchFriendRequest = (id) => dispatch => {
  APIUtilFriends.fetchFriendRequest(id).then((friendRequestFromServer) =>{
    return dispatch(receiveFriendRequest(friendRequestFromServer));
  });
};
