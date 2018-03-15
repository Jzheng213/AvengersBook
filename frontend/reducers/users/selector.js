
export const filterFriends = (users, user) => {
  debugger;
  const friends = user.friend_ids.map( friend_id => users[friend_id]);
  if (!friends || !friends[0] || !friends.slice(-1)[0]) return [];
  return friends;
};
