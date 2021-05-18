import React from 'react';
import GenreItem from './genre_item';

class GenreModule extends React.Component {
    constructor(props) {
        super(props);
        debugger
    }

    render(){
        const {genre, movies} = this.props;

        return(
            <div className = "single-genre-module">
                
                <p>{genre.genre}</p>

                <div>
                {movies.map(movie => {
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
                <p>TESTINGTESTINGTESTINGTESTINGTESTING</p>
            </div>
        )
    }
}

export default GenreModule;