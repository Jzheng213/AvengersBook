import { combineReducers } from 'redux';

import session from './session_errors_reducer';
import signup from './signup_errors_reducer';
export default combineReducers({
  signup,
  session
});
