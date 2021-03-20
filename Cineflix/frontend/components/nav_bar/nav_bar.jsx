import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

      render(){
        return(
            <div className='nav'>
                <div className='left-nav'>
                    <Link to='/'><img src="https://fontmeme.com/permalink/210319/d1842af13f3a1a8770c2a1aabea4152d.png"/></Link>
                </div>

                <div className='right-nav'>
                    <Link to="/login" id='login-button'>Sign In</Link>
                </div>
            </div>
        );
      }
}


export default NavBar;