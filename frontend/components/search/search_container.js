import { connect } from "react-redux";
import {fetchGenre, fetchGenres} from "../../actions/genres";
import { fetchMovies } from '../../actions/movies';
import {fetchMyLists, addToMyList, removeFromMyList} from "../../actions/mylists";
import Search from "./search";

const mstp = (state, ownProps) => {
    
    const searchFilter = (state, input) => {
        let arr = [];
        let movies = Object.values(state.entities.movies);
        movies.forEach( (movie) => {
          if (movie.title.toLowerCase().includes(input.toLowerCase())) {
            arr.push(movie);
          }
        })

        return arr;
    };

    return ({    
        input: ownProps.match.params.input,
        movies: searchFilter(state, ownProps.match.params.input),
        currentUser: state.sessions.currentUser,
        genres: state.entities.genres,
        mylists: Object.values(state.entities.mylists),
    })
}

const mdtp = dispatch => {
    return ({
        fetchMovies: () => dispatch(fetchMovies()),
        fetchMyLists: () => dispatch(fetchMyLists()),
        fetchGenre: (id) => dispatch(fetchGenre(id)),
        fetchGenres: () => dispatch(fetchGenres()),
        //addlist
        //removelist
    });
}

export default connect(mstp, mdtp)(Search);