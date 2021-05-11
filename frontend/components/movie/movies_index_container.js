import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchMovies } from '../../actions/movies';
import { fetchGenre, fetchGenres } from '../../actions/genres';
import MoviesIndex from './movies_index';


const mSTP = state => ({
  movies: Object.values(state.entities.movies),
  genres: Object.values(state.entities.genres)
})

const mDTP = dispatch => ({
  fetchMovies: () => dispatch(fetchMovies()),
  fetchGenres: () => dispatch(fetchGenres()),
  fetchGenre: (genre) => dispatch(fetchGenre(genre))
})
export default connect(mSTP, mDTP)(MoviesIndex);