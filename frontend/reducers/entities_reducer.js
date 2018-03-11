import { combineReducers } from 'redux';

import users from './users/users_reducer';
import posts from './posts/posts_reducer';

export default combineReducers({
  posts,
  users
});
