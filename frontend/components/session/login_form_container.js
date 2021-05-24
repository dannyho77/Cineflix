import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session';
import LoginForm from './login_form';

// const mapStateToProps = ({ errors }) => {
const mstp = ({ }) => {
  return {
    // errors: errors.session,
    formType: 'login',
    // navLink: <Link to="/signup">sign up instead</Link>,
  };
};

const mdtp = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
  };
};

export default connect(mstp, mdtp)(LoginForm);