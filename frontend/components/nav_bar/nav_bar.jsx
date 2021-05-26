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
   

    componentDidMount() {
        this.listener = document.addEventListener("scroll", e => {
          let scrolled = document.scrollingElement.scrollTop;
          if (scrolled >= 100) {
            if (this.state.status !== "ntop") {
              this.setState({ status: "ntop" });
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

      const { genres } = this.props;

            return (
                <div className={this.state.status === 'top' ? 'nav' : 'nav scrolled'} style = {{backgroundColor: this.state.status === 'top' ? '' : 'black'}}>
                    <div className='left-nav'>
                        <img id='logo' src="https://cineflix-dev.s3.amazonaws.com/logo.png"/>

                        <div className = "dropdown-left">
                          <span id = "genres-link">Genres</span>
                          <div className="dropdown-content">
                              <img id = "up-caret" src="https://cineflix-dev.s3.amazonaws.com/caret-arrow-up.png" />
                              <ul className="dropdown-list">

                                {Object.keys(genres).map(id => {
                                  return(
                                    <li key={id}><Link className = "dropdownlinks" to = {`genres/${id}`}>{genres[id].genre}</Link></li>
                                  )
                                  })
                                }
                              </ul>
                          </div>
                        </div>  
                        
                        <Link to = "movies/mylist" id = "mylist">My List</Link>
                    </div>

                    <div className='right-nav'>
                        <a href="https://github.com/dannyho77"><img src="https://cineflix-dev.s3.amazonaws.com/nav.github-logo.png" id="github"/></a>
                        <a href="https://www.linkedin.com/in/danny-ho-a4988360"><img src="https://cineflix-dev.s3.amazonaws.com/nav.linkedin-logo.png" id="linkedin"/></a>

                        <div className = "dropdown-right">
                            <img id = "profpic" src="https://cineflix-dev.s3.amazonaws.com/demouser_icon.jpg" />
                            <div className="dropdown-content">
                                  <img id = "up-caret" src="https://cineflix-dev.s3.amazonaws.com/caret-arrow-up.png" />
                                  <ul className="dropdown-list">
                                  <li className = "dropdownlinks"><a href="https://dannyho77.github.io/Danny-Ho-dev.bio/" id = 'portfoliolink'>Portfolio</a></li>
                                  <li className = "dropdownlinks" onClick={this.props.logout}>Log Out</li>
                                  </ul>
                            </div>
                        </div>

                    </div>
                </div>
            )
    }
                
    };

export default NavBar;