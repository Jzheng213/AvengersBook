//React
import React from 'react';
import { connect } from 'react-redux';
//Components
import { toggleErrorModal } from '../actions/modal_actions';

const mapDispatchToProps = dispatch => {
  return {
    toggleErrorModal: ()=> dispatch(toggleErrorModal())
  };
};

const Modal = ({component, modalScreen, toggleErrorModal}) => {
  return(
    <div className='body-container'>
      <div className={modalScreen} onClick={() => toggleErrorModal()}>
        <div className='modal-child' onClick={e => e.stopPropagation()}>
          {component}
        </div>
      </div>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(Modal);
