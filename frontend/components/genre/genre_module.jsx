import React from 'react';
import GenreItem from './genre_item';

class GenreModule extends React.Component {
    constructor(props) {
        super(props);
        debugger
    }

    render(){
        const {genre, movies, genres} = this.props;
        console.log(genres);
        return(
            <div className = "single-genre-module">
                
                {Object.keys(genres).map(genre => {
                    return (
                        <div>
                        {genres[genre].genre}
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