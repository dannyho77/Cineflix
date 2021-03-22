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
                    <a href="https://github.com/dannyho77"><img src="https://www.freeiconspng.com/thumbs/github-icon/github-icon-9.png" id="github"/></a>
                    <a href="https://www.linkedin.com/in/danny-ho-a4988360"><img src="https://cdn2.iconfinder.com/data/icons/simple-social-media-shadow/512/14-512.png" id="linkedin"/></a>
                    <Link to="/login" id='login-button'>Sign In</Link>
                </div>
            </div>
        );
      }
}

export default NavBar;

// export default ({currentUser, logout}) => {
//     const display = currentUser ? (

//     ) : (

//     )

//     return (

//     )
// }