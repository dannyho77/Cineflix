import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session';
import LoginForm from './login_form';


const mstp = state => {
  return {
    errors: state.errors.session
  };
};

const mdtp = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mstp, mdtp)(LoginForm);