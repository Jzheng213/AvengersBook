export const fetchPosts = (wall_owner_id) => {
  return $.ajax({
    method: 'GET',
    url: '/api/posts',
    data: {wall_owner_id}
  });
};

export const fetchFriendsPosts = (current_user_id) => {
  return $.ajax({
    method: 'GET',
    url: '/api/friends_posts',
    data: {current_user_id}
  });
};


export const fetchPost = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/posts/${id}`
  });
};

export const createPost = (post) => {
  return $.ajax({
    method: 'POST',
    url: '/api/posts',
    processData: false,
    contentType: false,
    dataType: 'json',
    data: post
  });
};

export const editPost = (post) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/posts/${post.id}`,
    processData: false,
    contentType: false,
    dataType: 'json',
    data: post
  });
};

export const deletePost = (id) =>{

  return $.ajax({
    method: 'DELETE',
    url: `/api/posts/${id}`
  });
};
