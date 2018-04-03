import {TOGGLE_EDIT_POST_MODAL} from '../../actions/modal_actions';

const editPostReducer = (state = {}, action) => {

  Object.freeze(state);
  switch (action.type) {
  case TOGGLE_EDIT_POST_MODAL:
    return action.post || {};
  default:
    return state;
  }
};

export default editPostReducer;
