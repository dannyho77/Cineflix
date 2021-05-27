import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../nav_bar/nav_bar';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        let email = '';
        
        if (props.signupProp) {
          email = props.signupProp.email;
        } else {
          email = '';
        }

        this.state = {email: email, password: ''};

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

    renderErrors(){
      return (
        <ul className = "err-wrapper">
          {this.props.errors.map((err, i) => (
            <li className="error" key={i}>
              {err}
            </li>
          ))}
        </ul>
      );
    }

    componentWillUnmount(){
      this.props.clearErrors()
    }

    render(){
        return(
          <div className='signup-form-body'>
              <div className='NavBar'>
                    <Link to='/'><img id='logo' src="https://cineflix-dev.s3.amazonaws.com/logo.png"/></Link>
                    <div className='right-nav'>
                        <a href="https://github.com/dannyho77"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" id="github"/></a>
                        <a href="https://www.linkedin.com/in/danny-ho-a4988360"><img src="https://cdn2.iconfinder.com/data/icons/simple-social-media-shadow/512/14-512.png" id="linkedin"/></a>
                        <Link to="/login" id='login-button'>Sign In</Link>
                    </div>
              </div>
              {/* <div className="signup-form-container"> */}
                  <form className="signup-form-box">
                      <div id='text1'>Create a password to start your <br/> membership.</div>
                      <br/>
                      <div id='item1'>
                        <input type="text" value={this.state.email} onChange={this.update('email')} id='signup-email' placeholder='Email'/>
                        <br/>
                        <input type="password" value={this.state.password} onChange={this.update('password')} id='signup-password' placeholder='Add a password'/>
                        <br/>
                        <div className = "errors">{this.renderErrors()}</div>
                        <button onClick={this.handleSubmit} className="signup-submit">Continue</button>
                      </div>
                  </form>
              {/* </div> */}
              <div id='bot-bar'></div>
          </div>
        );
    }
}

export default SignupForm;