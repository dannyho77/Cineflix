import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../nav_bar/nav_bar';


class HomeMovie extends React.Component{
    constructor(props){
        super(props);
        this.state = {muted:true};
        this.handleSound = this.handleSound.bind(this);
    }

    handleSound(e){
        e.preventDefault();
        this.setState({muted:!this.state.muted});
    }

    render(){
        
        const { muted } = this.state;

        const sound = muted ? (
                <img className="sound-button" src="https://cineflix-dev.s3.amazonaws.com/no-sound.png" onClick={this.handleSound}/>
            ) : (
                <img className="sound-button" src="https://cineflix-dev.s3.amazonaws.com/sound.png" onClick={this.handleSound}/>
        );


        return(
            <div className='home-movie-box'>
                    <NavBar className='NavBar'/>

                    <div id='main-movie-controls'>
                            <img id='main-movie-logo' src="https://cineflix-dev.s3.amazonaws.com/summerwars_logo.png" />
                            <p id='main-movie-info'>A student tries to fix a problem he accidentally <br /> caused in OZ, a digital world. If he doesn't, <br /> global havoc will ensue.</p>
                            <div id='main-movie-options'>
                                    <Link to='movies/6' id='play'><img src="https://cineflix-dev.s3.amazonaws.com/play.png"/><p>Play</p></Link>
                                {sound}
                                <p id = 'main-movie-rating'>PG</p>
                            </div>
                    </div>

                    <video id = "video" muted={this.state.muted} autoPlay width = '100%' height = '100%'>
                        <source src="https://cineflix-dev.s3.amazonaws.com/summerwars_vid.mp4" type="video/mp4" />
                    </video>
            </div>
        )
    }
}

export default HomeMovie;