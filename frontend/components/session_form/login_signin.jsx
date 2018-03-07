//React
import React from 'react';
import { Link } from 'react-router-dom';
//Components
import LogInFormContainer from './login_form_container';
import SignUpFormContainer from './signup_form_container';
import SignUpAccountContainer from './signup_login_accounts';

const LoginSignin = () => (
  <div>
    <header className='signin-header'>
      <div className='signin-container'>
        <Link to="/" className='signin-header-link'>
          <h1>avengersbook</h1>
        </Link>
        <LogInFormContainer />
      </div>
    </header>
    <div className='signup-body'>
      <div className='signup-body-container'>
        <SignUpAccountContainer />
        <SignUpFormContainer />
      </div>
    </div>
  </div>
);

export default LoginSignin;
