import React from 'react';
import GenreItem from '../genre/genre_item';
import NavBar from '../nav_bar/nav_bar_container';

class Search extends React.Component {
    constructor(props) {
        super(props);
        // this.handleAddRemove = this.handleAddRemove.bind(this);
    }

    componentDidMount() {
        this.props.fetchMovies();
        this.props.fetchGenres();
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
        const {input, movies, genres, mylists, currentUser, addToMyList, removeFromMyList} = this.props;


        return(
            <div id = "genreshowbody">
                    <NavBar className='NavBar'/>
                    <div className = "genreshowpage">
                        <div className = "genrename">My List</div>
                        
                        <div className = "genreshowcontainer">
                            {movies.map(movie => {
                                    return(
                                            <div className = "genre-movies" key = {movie.id}>
                                                                
                                                <GenreItem className = "genre-item"
                                                                        movie = {movie}
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

export default Search;