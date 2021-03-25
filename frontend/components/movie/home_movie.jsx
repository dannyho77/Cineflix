import React from 'react';
import { Link } from 'react-router-dom';

class HomeMovie extends React.Component{
    constructor(props){
        super(props);
        this.state = {muted:false};
        this.handleMute = this.handleMute.bind(this);
    }

    handleMute(e){
        e.preventDefault();
        this.setState({muted:true})
    }

    render(){
        
        const { muted } = this.state;

        const sound = muted ? (
            <button className="sound" onClick={this.changeMute}>
                <i className="fas fa-volume-mute"></i>
            </button>
            ) : (
            <button className="sound" onClick={this.changeMute}>
                <i className="fas fa-volume-up"></i>
            </button>
        );


        return(
            <div className='home-movie-box'>
                    <video muted={this.state.muted} autoPlay loop width='100%' height='680'>
                        <source src="https://cineflix-dev.s3.amazonaws.com/jerrymaguire_vid.mp4" type="video/mp4" />
                    </video>
                    <img id='home-movie-logo' src="https://picfiles.alphacoders.com/103/103394.png" />
                    <p id='home-movie-info'>When a sports agent has a moral epiphany and is fired for <br/>expressing it, he decides to put his new philosophy to the test.</p>
                    <div id='home-movie-options'>
                        {/* <Link></Link>
                        <button></button> */}
                    <div>{sound}</div>
                </div>
            </div>
        )
    }
}

export default HomeMovie;