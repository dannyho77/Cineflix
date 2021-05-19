import React from 'react';
import GenreItem from './genre_item';

class GenreModule extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render(){
        const {genres, movies, mylists, currentUser, addToMyList, removeFromMyList} = this.props;

        return(
            <div className = "single-genre-module">
                
                {Object.keys(genres).map(id => {
                    return (
                        <div key = {id}>
                        {genres[id].genre}
                        {genres[id].movie_ids.map(movId => {
                            return(
                                <div key = {movId}>
                                <GenreItem 
                                    movie = {movies[movId]}
                                    mylists = {mylists}
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

                {/* <div>
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
                </div> */}
                
            </div>
        )
    }
}

export default GenreModule;