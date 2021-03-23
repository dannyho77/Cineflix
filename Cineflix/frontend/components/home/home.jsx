import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../nav_bar/nav_bar'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          email: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
          [field]: e.currentTarget.value
        });
      }

    handleSubmit(e) {
        e.preventDefault();
        const email = Object.assign({}, this.state);
        this.props.action(email)
          .then(() => this.props.history.push("/signup"));
      }

      render(){
        return(
          <div>
                <div className="home-body">
                  <div className='NavBar'>
                    <Link to='/'><img id='logo' src="https://fontmeme.com/permalink/210319/d1842af13f3a1a8770c2a1aabea4152d.png"/></Link>
                    <div className='right-nav'>
                        <a href="https://github.com/dannyho77"><img src="https://www.freeiconspng.com/thumbs/github-icon/github-icon-9.png" id="github"/></a>
                        <a href="https://www.linkedin.com/in/danny-ho-a4988360"><img src="https://cdn2.iconfinder.com/data/icons/simple-social-media-shadow/512/14-512.png" id="linkedin"/></a>
                        <Link to="/login" id='login-button'>Sign In</Link>
                    </div>
                  </div>
                  <div className="home-container">
                      <div id='a'>Unlimited movies, TV <br/> shows, and more.</div>
                      <div id='b'>Watch anywhere. Cancel anytime.</div>
                      <div id='c'>Ready to watch? Enter your email to create or restart your membership.</div>
      
                      <form onSubmit={this.handleSubmit} className="home-enter-email">
                          <input type="text" placeholder='Email address'/>
                          <button>Get Started &gt;</button>
                      </form>
                  </div>
                </div>
          </div>
        );
      }
}


export default Home;