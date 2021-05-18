import React from 'react';
import GenreItem from './genre_item';

class GenreModule extends React.Component {
    constructor(props) {
        super(props);
        debugger
    }

    render(){
        const {genre, movies, genres} = this.props;
        let a;
        if(Object.keys(movies)>0){
            debugger
            
        }

        console.log(genres);
        console.log(movies);
        debugger
        return(
            <div className = "single-genre-module">
                
                {Object.keys(genres).map(id => {
                    return (
                        <div>
                        {genres[id].genre}
                        {genres[id].movie_ids.map(movId => {
                            return(
                                <div>
                                {movies[movId].title}
                                    <img src={movies[movId].photoURL}/>
                                    <video autoPlay><source src={movies[movId].movieURL} type="video/mp4" /></video>
                                </div>
                            )
                        })}
                        </div>
                        )
                })}

                <div>
                {/* {movies.map(movie => {
                    return(
                        <GenreItem
                            movie = {movie}
                            mylists = {this.props.mylists}
                            addToMyList = {this.props.addToMyList}
                            removeFromMyList = {this.props.removeFromMyList}
                            currentUser = {this.props.currentUser}
                        />
                    );
                })} */}
                </div>
                
            </div>
        )
    }
}

export default GenreModule;