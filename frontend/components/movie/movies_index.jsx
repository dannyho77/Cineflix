import React from 'react';
import HomeMovie from './home_movie';
import GenreContainer from '../genre/genre_container';


class MoviesIndex extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchGenres();
        this.props.fetchMovies();
        // this.props.fetchMovies().then(res => console.log(res))
    }

    
    render(){
        
        return (
        <div className='movies-index'>

            <HomeMovie id='main-movie-player'/>

            <div className = "section">
                {this.props.movies.length>0 && this.props.genres.length>0 ? <GenreContainer id = "genre-container"/> : ''}
            </div>

            <div className = "footer">
                <a href="https://github.com/dannyho77">
                    <img src="https://cineflix-dev.s3.amazonaws.com/github.png" />
                </a>
                <a href="https://www.linkedin.com/in/danny-ho-a4988360">
                    <img src="https://cineflix-dev.s3.amazonaws.com/linkedin.png" />
                </a>
                <a href="https://docs.google.com/document/d/1oPZtF0-WiJEMvioXgsPgu2_hJM1qFCbT4-YwdGDLsQw/edit?usp=sharing">
                    <img src="https://cineflix-dev.s3.amazonaws.com/cv.png" />
                </a>
            </div>
        </div>
        
        )
    }
}

export default MoviesIndex;