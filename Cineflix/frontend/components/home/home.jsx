import React from 'react';
import { Link } from 'react-router-dom';

const home = () => {
    return(
        <div className="home-container">
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
            <input type="text"/>
            <button><Link to="/signup"></Link>Get Started</button>
            <br/>
            <button>Demo</button>
        </div>
    )
};

export default home;