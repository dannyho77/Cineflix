import { connect } from 'react-redux';

import MoviesIndex from './movies_index';
import { fetchMovies } from '../../actions/movies';

/*
Export a container component for the `ReportIndex` that maps an array of all
reports from the store as a `reports` prop. Additionally, it should map in
functions that will dispatch `requestReports` and `deleteReport` to the store as
props of the same name.
*/

const mSTP = state => ({
  movies: Object.values(state.movies)
})

const mDTP = dispatch => ({
  fetchMovies: () => dispatch(fetchMovies())
})
export default connect(mSTP, mDTP)(MoviesIndex);