import { connect } from 'react-redux';
import { fetchMovies } from '../../actions/movies';
import { fetchGenre, fetchGenres } from '../../actions/genres';
import MoviesIndex from './movies_index';


const mstp = state => ({
  movies: Object.values(state.entities.movies),
})

const mdtp = dispatch => ({
  fetchMovie: (movie) => dispatch(fetchMovie(movie))
})
export default connect(mstp, mdtp)(MoviesIndex);