import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { createNewUser } from '../../actions/session';
import SignupForm from './signup_form';

// const mapStateToProps = ({ errors }) => {
  const mstp = (state, prevProp) => {
    return {
      errors: state.errors.session,
      signupProp: prevProp.location.state
    };
  };
  
  const mdtp = dispatch => {
    return {
      processForm: (user) => dispatch(createNewUser(user)),
      clearErrors: () => dispatch(clearErrors())
    };
  };
  
  export default connect(mstp, mdtp)(SignupForm);