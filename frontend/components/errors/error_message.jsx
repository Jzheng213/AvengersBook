import React from 'react';

const ErrorMessage = ({errorHeader, errorBody, toggleErrorModal}) => {
  return(
    <div className='error-messages'>
      <header> {errorHeader}</header>
      <article>{errorBody}</article>
      <footer>
        <button className='button blue-button' onClick={toggleErrorModal}>Close</button>
      </footer>
    </div>
  );
};

export default ErrorMessage;
