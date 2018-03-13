//React
import React from 'react';
import { connect } from 'react-redux';
//Components
import { toggleProfPicModal } from '../actions/modal_actions';

const mapDispatchToProps = dispatch => {
  return {
    toggleProfPicModal: ()=> dispatch(toggleProfPicModal())
  };
};

const Modal = ({component, modalScreen, toggleProfPicModal}) => {
  return(
    <div className='body-container'>
      <div className={modalScreen} onClick={() => toggleProfPicModal()}>
        <div className='modal-child' onClick={e => e.stopPropagation()}>
          {component}
        </div>
      </div>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(Modal);
