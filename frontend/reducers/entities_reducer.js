import { combineReducers } from 'redux';

import users from './users/users_reducer';
import posts from './posts/posts_reducer';
import editPost from './posts/edit_posts_reducer';
import friend_requests from './friend_requests/friend_requests_reducer';

export default combineReducers({
  friend_requests,
  posts,
  editPost,
  users
});
