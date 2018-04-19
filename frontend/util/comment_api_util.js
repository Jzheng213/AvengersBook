export const fetchComment = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/comments/${id}`
  });
};

export const fetchComments = (ids) => {
  return $.ajax({
    method: 'GET',
    url: '/api/comments/',
    data: {ids}
  });
};

export const postComment = (comment) => {
  return $.ajax({
    method: 'POST',
    url: '/api/comments/',
    data: comment
  });
};
