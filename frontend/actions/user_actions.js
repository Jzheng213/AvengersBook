import * as APIUtil from '../util/user_api_util';
import * as APIUtilFriends from '../util/friend_api_util';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_PAIR = 'RECEIVE_PAIR';

const receiveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    users
  };
};

const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user
  };
};

const receiveUserPair = (payload) => {
  
  return {
    type: RECEIVE_PAIR,
    currentUser: payload.currentUser,
    users: payload.users,
    friendRequests: payload.friendRequests || {}
  };
};

export const fetchUsers = () => dispatch => {
  return APIUtil.fetchUsers().then((users) =>{
    return dispatch(receiveUsers(users));
  });
};

export const fetchUser = (id) => dispatch => {
  return APIUtil.fetchUser(id).then((user) => {
    return dispatch(receiveUser(user));
  });
};

export const saveUserPhoto = (photo) => dispatch => {
  return APIUtil.updateUser(photo).then((user) => {
    dispatch(receiveUser(user));
  });
};

export const fetchFriends = (user) => dispatch => {
  return APIUtilFriends.fetchFriends(user).then((usersFromServer) => {
    dispatch(receiveUsers(usersFromServer));
  });
};

export const newFriendRequest = (data) => dispatch => {
  APIUtilFriends.createFriend(data).then((user) => {
    return dispatch(receiveUser(user));
  });
};

export const cancelFriendRequest = (data) => dispatch => {
  APIUtilFriends.cancelFriendRequest(data).then((payload) => {
    return dispatch(receiveUserPair(payload));

  });
};

export const approveFriendRequest = (data) => dispatch => {
  APIUtilFriends.approveFriendRequest(data).then((payload) => {
    return dispatch(receiveUserPair(payload));

  });
};
