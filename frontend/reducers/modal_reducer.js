import {
  TOGGLE_PROF_PIC_MODAL
} from '../actions/modal_actions';

import merge from 'lodash/merge';

const defaultState = {
  profPicModal: false
};

const modalReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type){
  case TOGGLE_PROF_PIC_MODAL:
    return merge({}, state, { profPicModal: !state.profPicModal});
  default:
    return state;
  }
};

export default modalReducer;
