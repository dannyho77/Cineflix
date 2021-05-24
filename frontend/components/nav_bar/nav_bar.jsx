import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.listener = null;
        this.state = {
        status: "top"
        };
    }
//       render(){
//         return(
//             <div className='nav'>
//                 <div className='left-nav'>
//                     <Link to='/'><img src="https://fontmeme.com/permalink/210319/d1842af13f3a1a8770c2a1aabea4152d.png"/></Link>
//                 </div>

//                 <div className='right-nav'>
//                     <a href="https://github.com/dannyho77"><img src="https://www.freeiconspng.com/thumbs/github-icon/github-icon-9.png" id="github"/></a>
//                     <a href="https://www.linkedin.com/in/danny-ho-a4988360"><img src="https://cdn2.iconfinder.com/data/icons/simple-social-media-shadow/512/14-512.png" id="linkedin"/></a>
//                     <Link to="/login" id='login-button'>Sign In</Link>
//                 </div>
//             </div>
//         );
//       }
// }

// export default NavBar;

// const NavBar = ({currentUser, logout}) => {
    // const display = !currentUser ? (
    //     <div>
    //         <Link to='/' id='logo'><img src="https://fontmeme.com/permalink/210319/d1842af13f3a1a8770c2a1aabea4152d.png"/></Link>
    //         <a href="https://github.com/dannyho77"><img src="https://www.freeiconspng.com/thumbs/github-icon/github-icon-9.png" id="github"/></a>
    //         <a href="https://www.linkedin.com/in/danny-ho-a4988360"><img src="https://cdn2.iconfinder.com/data/icons/simple-social-media-shadow/512/14-512.png" id="linkedin"/></a>
    //         <button onClick={logout} id='logout button'>Sign Out</button>
    //     </div>
    // ) : (
    //     <div>
    //         <Link to='/' id='logo'><img src="https://fontmeme.com/permalink/210319/d1842af13f3a1a8770c2a1aabea4152d.png"/></Link>
    //         <a href="https://github.com/dannyho77"><img src="https://www.freeiconspng.com/thumbs/github-icon/github-icon-9.png" id="github"/></a>
    //         <a href="https://www.linkedin.com/in/danny-ho-a4988360"><img src="https://cdn2.iconfinder.com/data/icons/simple-social-media-shadow/512/14-512.png" id="linkedin"/></a>
    //         <Link to="/login" id='login-button'>Sign In</Link>
    //     </div>
    // )

    componentDidMount() {
        this.listener = document.addEventListener("scroll", e => {
          let scrolled = document.scrollingElement.scrollTop;
          if (scrolled >= 100) {
            if (this.state.status !== "amir") {
              this.setState({ status: "amir" });
            }
          } else {
            if (this.state.status !== "top") {
              this.setState({ status: "top" });
            }
          }
        });
      }
    
      componentDidUpdate() {
        document.removeEventListener("scroll", this.listener);
      }


    render(){
            return (
                <div className={this.state.status === 'top' ? 'nav' : 'nav scrolled'} style = {{backgroundColor: this.state.status === 'top' ? '' : 'black'}}>
                    <img id='logo' src="https://cineflix-dev.s3.amazonaws.com/logo.png"/>
                    <div className='right-nav'>
                        <a href="https://github.com/dannyho77"><img src="https://www.freeiconspng.com/thumbs/github-icon/github-icon-9.png" id="github"/></a>
                        <a href="https://www.linkedin.com/in/danny-ho-a4988360"><img src="https://cdn2.iconfinder.com/data/icons/simple-social-media-shadow/512/14-512.png" id="linkedin"/></a>
                        <button onClick={this.props.logout} id='logout-button'>Sign Out</button>
                    </div>
                </div>
            )
    }
                
    };

export default NavBar;