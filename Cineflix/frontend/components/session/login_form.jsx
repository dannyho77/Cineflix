import React from 'react';
import { Link } from 'react-router-dom';

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
        this.props.processForm(user);
      }

    render(){
        return(
          <div id="login-form-body">
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
                  <div id='newto'>New to Netflix? <Link to='/signup'>Sign up now</Link></div>
              </div>
            </div>
        );
    }
}

export default LoginForm;