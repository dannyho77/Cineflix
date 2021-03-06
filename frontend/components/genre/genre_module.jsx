import React from 'react';
import GenreItem from './genre_item';


class GenreModule extends React.Component {
    constructor(props) {
        super(props);
        
    }

    componentDidMount() {
        this.props.fetchMyLists();
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
                                <div className = "single-genre-module" key = {id+2} >
                                    
                                    {/* <div className="left-button" onClick={() => this.scroll('left')}>{'<'}</div> */}

                                        {genres[id].movie_ids.map(movId => {
                                            return(
                                                <div className = "genre-movie" key = {movId}>
                                                    
                                                        <GenreItem className = "genre-item"
                                                            movie = {movies[movId]}
                                                            mylists = {mylists}
                                                            currentUser = {currentUser}
                                                            addToMyList = {addToMyList}
                                                            removeFromMyList = {removeFromMyList}
                                                        />
                                                    
                                                </div>
                                            )
                                        })}

                                    {/* <div className="right-button" onClick={() => this.scroll('right')}>{'>'}</div> */}
                                </div>
                            </div>
                        )
                })}
                
            </div>
        )
    }
}

export default GenreModule;