export const fetchPosts = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/posts'
  });
};

export const fetchPost = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/posts/${id}`
  });
};
