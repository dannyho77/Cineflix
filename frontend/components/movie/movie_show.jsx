import React from 'react';


class MovieShow extends React.Component{

    constructor(props){
        super(props);
        
    }

    componentDidMount(){  
        this.props.fetchMovie(this.props.match.params.movieId);
    }
    
    render(){

        return (
            <div>
                {this.props.movie ?
                <div>
                    <img className = "backarrow" src="https://cineflix-dev.s3.amazonaws.com/back-arrow.png" onClick={() => this.props.history.goBack()}/>
                
                    <video controls className = "movieshow-video" autoPlay>
                        <source src = {this.props.movie.movieURL} type="video/mp4"/>
                    </video>
                </div>
                : <p>null</p> }
            </div>
        )
    }
}

export default MovieShow;