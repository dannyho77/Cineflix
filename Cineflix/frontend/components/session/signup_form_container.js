import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { createNewUser } from '../../actions/session';
import SignupForm from './signup_form';

// const mapStateToProps = ({ errors }) => {
  const mapStateToProps = ({ }) => {
    return {
      // errors: errors.session,
      formType: 'signup'
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      processForm: (user) => dispatch(createNewUser(user)),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);