export const fetchFriends = (user) => {
  return $.ajax({
    method: 'GET',
    url: '/api/friends',
    data: { user }
  });
};
