import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session';
import Home from './home';

  
  const mdtp = (dispatch) => {
    return {
      login: (user) => dispatch(login(user))
    };
  };
  
  export default connect(null, mdtp)(Home);