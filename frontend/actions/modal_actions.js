export const TOGGLE_PROF_PIC_MODAL = 'TOGGLE_PROF_PIC_MODAL';
export const TOGGLE_POST_MODAL = 'TOGGLE_POST_MODAL';


export const toggleProfPicModal = () => {
  return {
    type: TOGGLE_PROF_PIC_MODAL
  };
};

export const togglePostModal = (on) => {
  return {
    type: TOGGLE_POST_MODAL,
    on
  };
};
