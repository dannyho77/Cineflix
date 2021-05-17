import React from 'react';
import GenreItem from './genre_item';

class GenreModule extends React.Component {
    constructor(props) {
        super(props);

    }

    render(){
        const {genre, movies} = this.props;

        return(
            <div className = "single-genre-module">
                <p>{genre.genre}</p>

                <div>
                {movies.map((movie, idx) => {
                    return(
                        <GenreItem
                            movie = {movie}
                            mylists = {this.props.mylists}
                            addToMyList = {this.props.addToMyList}
                            removeFromMyList = {this.props.removeFromMyList}
                            currentUser = {this.props.currentUser}
                        />
                    );
                })}
                </div>
            </div>
        )
    }
}

export default GenreModule;