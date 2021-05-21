import React from 'react';
import GenreItem from './genre_item';

class GenreModule extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render(){
        const {genres, movies, mylists, currentUser, addToMyList, removeFromMyList} = this.props;

        return(
            <div className = "genre-modules">
                
                {Object.keys(genres).map(id => {
                    return (
                        <div className = "single-genre-module" key = {id}>
                            <div className = "genre-names">
                                {genres[id].genre}
                            </div>
                            {genres[id].movie_ids.map(movId => {
                                return(
                                    <div key = {movId}>
                                    <GenreItem className = "genre-item"
                                        movie = {movies[movId]}
                                        mylists = {Object.values(mylists)}
                                        currentUser = {currentUser}
                                        addToMyList = {addToMyList}
                                        removeFromMyList = {removeFromMyList}
                                    />
                                    </div>
                                )
                            })}
                        </div>
                        )
                })}
                
            </div>
        )
    }
}

export default GenreModule;