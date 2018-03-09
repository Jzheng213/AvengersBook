import React from 'react';
import { Link } from 'react-router-dom';
const NewUserAccounts = (props) => {
  return(
    <div className='user-accounts'>
      <Link to={'/'}>
        <img className='signup-image' src={window.avengersLogo}/>
      </Link>
    </div>
  );
};

export default NewUserAccounts;
