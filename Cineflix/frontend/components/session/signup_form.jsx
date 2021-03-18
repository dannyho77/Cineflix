import React from 'react';
// import { Link } from 'react-router-dom';

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
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
      }

    render(){
        return(
            <div className="signup-form-container">
                <form onSubmit={this.handleSubmit} className="signup-form-box">
                    <div id='text1'>Create a password to start your membership.</div>
                    <br/>
                    <input type="text" value={this.state.email} onChange={this.update('email')} className='login-input'/>
                    <br/>
                    <input type="password" value={this.state.password} onChange={this.update('password')} className='login-input'/>
                    <br/>
                    <button className="signup-submit">Continue</button>
                </form>
            </div>
        );
    }
}

export default SignupForm;