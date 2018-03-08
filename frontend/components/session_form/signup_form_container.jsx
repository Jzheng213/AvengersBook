//React
import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
//Components
import { signup } from '../../actions/session_actions';
import NewUserForm from './new_user_form';

const mapStateToProps = ({ errors }) => {
  return {

    errors: errors.signup,
    formType: 'signup'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewUserForm);
