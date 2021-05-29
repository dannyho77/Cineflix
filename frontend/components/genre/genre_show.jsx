import React from 'react';
import GenreItem from '../genre/genre_item';
import NavBar from '../nav_bar/nav_bar_container';

class GenreShow extends React.Component {
    constructor(props) {
        super(props);
        // this.handleAddRemove = this.handleAddRemove.bind(this);
    }

    componentDidMount() {
        this.props.fetchGenre(this.props.match.params.genreId);
        this.props.fetchGenres();
        this.props.fetchMovies();
        //.then(() => this.handleAddRemove());
        this.props.fetchMyLists();
    }


    // handleAddRemove(){
    //     const {
    //         mylists,
    //         movie,
    //         addToMyList,
    //         removeFromMyList,
    //         currentUser
    //     } = this.props;

    //     const mylist = mylists.find(mylist => {
    //         mylist.movie_id === movie.id
    //     });

    //     if (mylist) {
    //         removeFromMyList(mylist.id);
    //     } else {
    //         addToMyList({
    //             user_id: currentUser.id,
    //             movie_id: movie.id
    //         });
    //     }
    // }

    render(){
        const {genre, genres, movie, movies, mylists, currentUser, addToMyList, removeFromMyList} = this.props;


        return(
            <div id = "genreshowbody">
                    <NavBar className='NavBar'/>
                    <div className = "genreshowpage">
                        <div className = "genrename">{genre.genre}</div>
                        
                        <div className = "genreshowcontainer">
                            {genre.movie_ids.map(movId => {
                                    return(
                                            <div className = "genre-movies" key = {movId}>
                                                                
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
                        </div>
                    </div>
            </div>
        )
    }
}

export default GenreShow;