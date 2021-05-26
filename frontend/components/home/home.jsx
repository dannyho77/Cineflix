import React from 'react';
import { Link, Redirect } from 'react-router-dom';
// import NavBar from '../nav_bar/nav_bar';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          email: '',
          redirect: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoSubmit = this.handleDemoSubmit.bind(this);;
    }

    update(field) {
        return e => this.setState({
          [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        // const email = Object.assign({}, this.state);
        if (this.state.email !== ''){
          this.setState({redirect: true})
        };
    }

    handleDemoSubmit(e) {
      e.preventDefault();
      const user = { email: 'baejoohyun@gmail.com', password: 'redvelvet' };
      this.props.login(user).then(() => this.props.history.push('/movies'));
    }


      render(){
        // this is 'declarative routing' (https://reactrouter.com/web/api/Redirect)
        if (this.state.redirect) {
          return <Redirect to={
            {pathname: '/signup',
            state: {email: this.state.email}}
            }
          />};

        return(
          <div>
                <div className="home-body">
                  <div className='NavBar'>
                    <img id='logo' src="https://cineflix-dev.s3.amazonaws.com/logo.png"/>
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
                          <input type="text" placeholder='Email address' onChange={this.update('email')}/>
                          <button>Get Started &gt;</button>
                      </form>

                      <button id = "demo-login" onClick = {this.handleDemoSubmit}>Demo Login</button>
                  </div>
                </div>
          </div>
        );
      }
}


export default Home;