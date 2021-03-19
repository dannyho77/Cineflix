import React from 'react';
import { Link } from 'react-router-dom';

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
        // this.props.processForm(email)
        this.props.history.push("/signup")
      }

      render(){
        return(
            <div className="home-body">
            <div className="home-container">
                <h1>Unlimited movies, TV <br/> shows, and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                <form onSubmit={this.handleSubmit} className="home-enter-email">
                    <input type="text"/>
                    <button>Get Started</button>
                </form>
                <br/>
                <button>Demo</button>
            </div>
            </div>
        );
      }
}


export default Home;