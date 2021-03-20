import React from 'react';
import { Link } from 'react-router-dom';
// import NavBar from '../nav_bar/nav_bar'

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
          <div>
            {/* <NavBar/> */}
                <div className="home-body">
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