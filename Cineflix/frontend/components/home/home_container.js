import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { goToSignup } from '../../actions/home';
import home from './home';

  
  const mapDispatchToProps = dispatch => {
    return {
      processForm: (email) => dispatch(goToSignup(email)),
    };
  };
  
  export default connect(mapDispatchToProps)(home);