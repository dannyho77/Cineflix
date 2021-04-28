import React from 'react';
import { Link } from 'react-router-dom';

import NavBar from '../nav_bar/nav_bar';

class HomeMovie extends React.Component{
    constructor(props){
        super(props);
        this.state = {muted:true};
        this.handleMute = this.handleMute.bind(this);
    }

    handleMute(e){
        e.preventDefault();
        this.setState({muted:!this.state.muted});
    }

    render(){
        
        const { muted } = this.state;

        const sound = muted ? (
            <button className="sound-button" onClick={this.handleMute}>
                <i className="fas fa-volume-mute"></i>
            </button>
            ) : (
            <button className="sound-button" onClick={this.handleMute}>
                <i className="fas fa-volume-up"></i>
            </button>
        );


        return(
            <div className='home-movie-box'>
                    <NavBar className='NavBar'/>
                    
                    <div id='main-movie-controls'>
                        <img id='home-movie-logo' src="https://cineflix-dev.s3.amazonaws.com/summerwars_logo.png" />
                        <p id='home-movie-info'>A student tries to fix a problem he accidentally <br/> caused in OZ, a digital world. If he doesn't, <br/> global havoc will ensue.</p>
                        <div id='home-movie-options'>
                            {/* <button> */}
                                <Link to='/movies' id='play'>Play</Link>
                            {/* </button> */}
                            {sound}
                        </div>
                    </div>

                    <video muted={this.state.muted} autoPlay loop width = '100%' height = '100%'>
                        <source src="https://cineflix-dev.s3.amazonaws.com/summerwars_vid.mp4" type="video/mp4" />
                    </video>
            </div>
        )
    }
}

export default HomeMovie;