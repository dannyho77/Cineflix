import React from 'react';

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
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    Sign In
                    <br/>
                    <input type="text" value={this.state.email} onChange={this.update('email')} className='login-input'/>
                    <br/>
                    <input type="password" value={this.state.password} onChange={this.update('password')} className='login-input'/>
                    <br/>
                    <button className="login-submit">Sign In</button>
                </form>
                <Link to='/signup'>Sign up now</Link>
            </div>
        );
    }
}

export default LoginForm;