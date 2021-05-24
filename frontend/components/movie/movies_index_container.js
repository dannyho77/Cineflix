import { connect } from 'react-redux';
import { fetchMovies } from '../../actions/movies';
import { fetchGenre, fetchGenres } from '../../actions/genres';
import MoviesIndex from './movies_index';


const mstp = state => ({
  movies: Object.values(state.entities.movies),
  genres: Object.values(state.entities.genres)
})

const mdtp = dispatch => ({
  fetchMovies: () => dispatch(fetchMovies()),
  fetchGenres: () => dispatch(fetchGenres()),
  fetchGenre: (genre) => dispatch(fetchGenre(genre))
})
export default connect(mstp, mdtp)(MoviesIndex);