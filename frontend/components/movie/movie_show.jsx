import React from 'react';
import { Link } from 'react-router-dom';


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
                {this.props.video ?
                <video autoPlay>
                    <source src = {this.props.movie.movieURL} type="video/mp4"/>
                </video>
                : <p>null</p> }
            </div>
        )
    }
}

export default MovieShow;