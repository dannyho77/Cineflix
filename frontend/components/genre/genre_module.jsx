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
                            <div key = {id}>
                                <div className = "genre-names" key = {id+1}>
                                    {genres[id].genre}
                                </div>
                                <div className = "single-genre-module" key = {id+2}>
                                    
                                    {genres[id].movie_ids.map(movId => {
                                        return(
                                            <div className = "genre-movie" key = {movId}>
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
                            </div>
                        )
                })}
                
            </div>
        )
    }
}

export default GenreModule;