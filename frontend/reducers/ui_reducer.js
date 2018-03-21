
import { combineReducers } from 'redux';

// import filters from './filters_reducer';
import modal from './modal_reducer';
import coverPhoto from './cover_photo/cover_photo';

export default combineReducers({
  // filters,
  coverPhoto,
  modal
});
