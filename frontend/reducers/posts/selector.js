export const asArray = (posts) => {
  const postsArr = Object.keys(posts).map(key => posts[key]);
  return postsArr.reverse();
};
