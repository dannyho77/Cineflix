import React from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {fetchGenre} from "../../actions/genres";
import {fetchMyLists, addToMyList, removeFromMyList} from "../../actions/mylists";
import selectMovies from "../../reducers/selectmovie";
import GenreModule from "./genre_module";

const mstp = (state, ownProps) => {
  const genreId = ownProps.genreId || ownProps.match.params.genreId;
  const genre = state.entities.genres[genreId];
  debugger
  return ({
    genre,
    genreId,
    movies: selectMovies(state, genre),
    currentUser: state.sessions.currentUser,
    mylists: Object.values(state.entities.mylists)
  });
};

const mdtp = (dispatch) => {
  return {
    fetchGenre: (genre) => dispatch(fetchGenre(genre)),
    addToMyList: (movieId) => dispatch(addToMyList(movieId)),
    removeFromMyList: (id) => dispatch(removeFromMyList(id)),
    fetchMyLists: () => dispatch(fetchMyLists()),
  };
};

export default withRouter(connect(mstp, mdtp)(GenreModule));