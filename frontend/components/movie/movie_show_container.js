import { connect } from 'react-redux';
import { fetchMovie } from '../../actions/movies';
import MovieShow from './movie_show';


const mstp = (state, ownProps) => {
    let movieId = ownProps.match.params.movieId;
    return ({
        movie: state.entities.movies[movieId]
    })
}

const mdtp = dispatch => ({
  fetchMovie: (movieId) => dispatch(fetchMovie(movieId))
})
export default connect(mstp, mdtp)(MovieShow);