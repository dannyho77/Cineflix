import React from 'react';
import { Link } from 'react-router-dom';


class MoviesIndex extends React.Component{
    componentDidMount(){
        this.props.fetchMovies()
    }
    render(){
        
        const allMovies = this.props.movies.map(movie => {
            return <li key={movie.id}>{movie.title}</li>
        });

        return (
        <div>
            <p>testing...</p>
            <ul>{allMovies}</ul>;
        </div>
        
        )
    }
}

export default MoviesIndex;