import { combineReducers } from 'redux';

import session from './sessions/session_errors_reducer';
import signup from './sessions/signup_errors_reducer';
import post from './posts/post_errors_reducer';
export default combineReducers({
  signup,
  session,
  post
});
