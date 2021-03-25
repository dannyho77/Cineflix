import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import NavBar from '../nav_bar/nav_bar';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          email: '',
          password: ''
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
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
        .then((user) => this.props.history.push('/movies'));
      }

    render(){
        return(
          <div id="login-form-body">
              <div className='NavBar'>
                    <Link to='/'><img id='logo' src="https://fontmeme.com/permalink/210319/d1842af13f3a1a8770c2a1aabea4152d.png"/></Link>
                    <div className='right-nav'>
                        <a href="https://github.com/dannyho77"><img src="https://www.freeiconspng.com/thumbs/github-icon/github-icon-9.png" id="github"/></a>
                        <a href="https://www.linkedin.com/in/danny-ho-a4988360"><img src="https://cdn2.iconfinder.com/data/icons/simple-social-media-shadow/512/14-512.png" id="linkedin"/></a>
                        <Link to="/signup" id='signup-button'>Sign Up</Link>
                    </div>
              </div>
              <div className="login-form-container">
                  <form onSubmit={this.handleSubmit} className="login-form-box">
                      <h1>Sign In</h1>
                      <br/>
                      <input type="text" value={this.state.email} onChange={this.update('email')} id='login-email' placeholder='Email'/>
                      <br/>
                      <input type="password" value={this.state.password} onChange={this.update('password')} id='login-password' placeholder='Password'/>
                      <br/>
                      <button id="login-submit">Sign In</button>
                  </form>
                  <div id='newto'>New to Netflix? <Link to='/signup' id='signup-link'>Sign up now.</Link></div>
              </div>
            </div>
        );
    }
}

export default LoginForm;