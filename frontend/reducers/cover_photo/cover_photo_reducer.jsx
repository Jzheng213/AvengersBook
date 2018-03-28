import {
  TOGGLE_UPLOAD_PHOTO
} from '../../actions/cover_load_actions';

import merge from 'lodash/merge';

const defaultState = {
  uploadingCover: false
};

const coverPhotoReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type){
  case TOGGLE_UPLOAD_PHOTO:
    return merge({}, state, { uploadingCover: !state.uploadingCover});
  default:
    return state;
  }
};

export default coverPhotoReducer;
