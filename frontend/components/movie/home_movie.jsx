import React from 'react';
import { Link } from 'react-router-dom';

import NavBar from '../nav_bar/nav_bar';

class HomeMovie extends React.Component{
    constructor(props){
        super(props);
        this.state = {muted:false};
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
                <div className="fas fa-volume-mute"></div>
            </button>
            ) : (
            <button className="sound-button" onClick={this.handleMute}>
                <div className="fas fa-volume-up"></div>
            </button>
        );


        return(
            <div className='home-movie-box'>
                    <NavBar className='NavBar'/>
                    
                    <div id='main-movie-controls'>
                        <img id='home-movie-logo' src="https://picfiles.alphacoders.com/103/103394.png" />
                        <p id='home-movie-info'>When a sports agent has a moral epiphany and <br/> is fired for expressing it, he decides to put his <br/> new philosophy to the test.</p>
                        <div id='home-movie-options'>
                            {/* <Link></Link>
                            <button></button> */}
                            <Link to='/movies' id='play'>Play</Link>
                            {sound}
                        </div>
                    </div>

                    <video muted={this.state.muted} autoPlay loop width='100%' height='680'>
                        <source src="https://cineflix-dev.s3.amazonaws.com/jerrymaguire_vid.mp4" type="video/mp4" />
                    </video>
            </div>
        )
    }
}

export default HomeMovie;