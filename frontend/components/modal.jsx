import React from 'react';

const Modal = ({component, modalScreen, toggleModal}) => {
  return(
    <div className='body-container'>
      <div className={modalScreen} onClick={() => toggleModal()}>
        <div className='modal-child' onClick={e => e.stopPropagation()}>
          {component}
        </div>
      </div>
    </div>
  );
};

export default Modal;
