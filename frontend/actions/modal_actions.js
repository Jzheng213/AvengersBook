export const TOGGLE_PROF_PIC_MODAL = 'TOGGLE_PROF_PIC_MODAL';
export const TOGGLE_POST_MODAL = 'TOGGLE_POST_MODAL';
export const TOGGLE_ERROR_MODAL = 'TOGGLE_ERROR_MODAL';


export const toggleProfPicModal = () => {
  return {
    type: TOGGLE_PROF_PIC_MODAL
  };
};

export const togglePostModal = () => {
  return {
    type: TOGGLE_POST_MODAL
  };
};

export const toggleErrorModal = () => {
  
  return {
    type: TOGGLE_ERROR_MODAL
  };
};
