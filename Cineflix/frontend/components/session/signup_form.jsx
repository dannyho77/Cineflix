import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../nav_bar/nav_bar';

class SignupForm extends React.Component {
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
        debugger
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
          .then(() => this.props.history.push('/movies'));
      }

    render(){
        return(
          <div className='signup-form-body'>
            <div id='signup-navbar'><NavBar/></div>
              {/* <div className="signup-form-container"> */}
                  <form className="signup-form-box">
                      <div id='text1'>Create a password to start your <br/> membership.</div>
                      <br/>
                      <div id='item1'>
                        <input type="text" value={this.state.email} onChange={this.update('email')} id='signup-email' placeholder='Email'/>
                        <br/>
                        <input type="password" value={this.state.password} onChange={this.update('password')} id='signup-password' placeholder='Add a password'/>
                        <br/>
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