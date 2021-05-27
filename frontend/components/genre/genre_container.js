import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {fetchGenre} from "../../actions/genres";
import {fetchMyLists, addToMyList, removeFromMyList} from "../../actions/mylists";
import GenreModule from "./genre_module";

const mstp = (state) => {

  return ({
    genres: state.entities.genres,
    movies: state.entities.movies,
    currentUser: state.sessions.currentUser,
    mylists: Object.values(state.entities.mylists)
  });
};

const mdtp = (dispatch) => {
  return {
    addToMyList: (movie) => dispatch(addToMyList(movie)),
    removeFromMyList: (mylistId) => dispatch(removeFromMyList(mylistId)),
    fetchMyLists: () => dispatch(fetchMyLists())
  };
};

export default withRouter(connect(mstp, mdtp)(GenreModule));