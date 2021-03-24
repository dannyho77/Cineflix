import * as APIUtil from '../utils/movies';

export const RECEIVE_MOVIES = 'RECEIVE MOVIES';
export const RECEIVE_MOVIE = 'RECEIVE MOVIE';

export const receiveMovies = movies => ({
    type: RECEIVE_MOVIES,
    movies
})

export const receiveMovie = movie => ({
    type: RECEIVE_MOVIE,
    movie
})

export const fetchMovies = () => dispatch => (
    APIUtil.fetchMovies().then(movies => (
      dispatch(receiveMovies(movies))
    ))
  );
  
  export const fetchMovie = movieId => dispatch => (
    APIUtil.fetchMovie(movieId).then(movie => (
      dispatch(receiveMovie(movie))
    ))
  );