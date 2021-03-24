import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { createNewUser } from '../../actions/session';
import SignupForm from './signup_form';

// const mapStateToProps = ({ errors }) => {
  const mapStateToProps = ({}, prevProp) => {
    return {
      // errors: errors.session,
      signupProp: prevProp.location.state
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      processForm: (user) => dispatch(createNewUser(user)),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);