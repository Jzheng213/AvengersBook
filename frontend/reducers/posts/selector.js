export const asArray = (posts) => {
  return Object.keys(posts).map(key => posts[key]);
};
