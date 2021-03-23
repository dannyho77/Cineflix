import { connect } from 'react-redux';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { goToSignup } from '../../actions/home';
import home from './home';

  
  const mapDispatchToProps = dispatch => {
    return {
      action: (email) => dispatch(goToSignup(email)),
    };
  };
  
  export default withRouter(connect(mapDispatchToProps)(home));