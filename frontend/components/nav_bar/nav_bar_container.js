import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { logout } from '../../actions/session';
import { withRouter } from 'react-router-dom';

const mstp = state => ({
    currentUser: state.sessions.currentUser,
    genres: state.entities.genres
});

const mdtp = dispatch => ({
    logout: () => dispatch(logout())
});

export default withRouter(connect(mstp, mdtp)(NavBar));