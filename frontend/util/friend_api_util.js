export const fetchFriends = (user) => {
  return $.ajax({
    method: 'GET',
    url: '/api/friends',
    data: { user }
  });
};

export const fetchFriendRequests = (id) => {
  return $.ajax({
    method: 'GET',
    url: '/api/friend_requests',
    data: { id }
  });
};

export const createFriend = ({requestor_id, receiver_id}) => {
  return $.ajax({
    method: 'POST',
    url: '/api/friends',
    data: { requestor_id, receiver_id }
  });
};

export const deleteFriend = ( requestor_id, receiver_id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/friend/${receiver_id}`,
    data: { requestor_id }
  });
};

export const cancelFriendRequest = ({requestor_id, receiver_id, request}) =>{
  return $.ajax({
    method: 'DELETE',
    url: 'api/friend_request',
    data: {requestor_id, receiver_id, request}
  });
};

export const approveFriendRequest = ({requestor_id, receiver_id, request}) =>{
  return $.ajax({
    method: 'PATCH',
    url: `api/friends/${receiver_id}`,
    data: {requestor_id, receiver_id, request}
  });
};
