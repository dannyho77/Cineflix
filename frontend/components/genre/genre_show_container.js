import { connect } from "react-redux";
import {fetchGenre, fetchGenres} from "../../actions/genres";
import { fetchMovies } from '../../actions/movies';
import {fetchMyLists, addToMyList, removeFromMyList} from "../../actions/mylists";
import GenreShow from "./genre_show";

const mstp = (state, ownProps) => {
    
    let genreId = ownProps.match.params.genreId;
    return ({
        genre: state.entities.genres[genreId],
        mylists: Object.values(state.entities.mylists),
        movies: state.entities.movies,
        currentUser: state.sessions.currentUser,
        genres: state.entities.genres
    })
}

const mdtp = dispatch => {
    return ({
        fetchGenre: (id) => dispatch(fetchGenre(id)),
        fetchGenres: () => dispatch(fetchGenres()),
        fetchMovies: () => dispatch(fetchMovies()),
        fetchMyLists: () => dispatch(fetchMyLists()),
        //addlist
        //removelist
    });
}

export default connect(mstp, mdtp)(GenreShow);