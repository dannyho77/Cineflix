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
        
        const sound = () => {
            if (!this.state.muted){
                <button id='mute-button' onClick={this.handleMute}><i class="fas fa-volume-mute"></i></button>
            } else {
                <button id='unmute-button' onClick={this.handleMute}><i class="fas fa-volume-up"></i></button>
            }
        }


        return(
            <div className='home-movie-box'>
                <img id='home-movie-logo' src="https://static.wikia.nocookie.net/logopedia/images/8/84/Jerry-maguire-movie-logo.png/revision/latest?cb=20201217024556" />
                <p id='home-movie-info'>When a sports agent has a moral epiphany and is fired for expressing it, he decides to put his new philosophy to the test.</p>
                <div id='home-movie-options'>
                    <Link></Link>
                    <button></button>
                    <div>{sound}</div>
                </div>
                <video muted={this.state.muted} autoplay loop>
                    <source src="https://cineflix-dev.s3.amazonaws.com/jerrymaguire_vid.mp4" type="video/mp4" />
                </video>
            </div>
        )
    }
}

export default HomeMovie;