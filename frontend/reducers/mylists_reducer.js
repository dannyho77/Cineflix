import * as Actions from '../actions/mylists';
import { merge } from 'lodash';

export default (state = {}, action) => {
    Object.freeze(state);

    let nextstate = Object.assign({}, state)

    switch (action.type){
        case Actions.RECEIVE_MYLISTS:
            return action.movies;
        case Actions.ADD_MYLIST:
            return Object.assign({}, state, { [action.movieId.id]: action.movieId});
        case Actions.REMOVE_MYLIST:
            let newstate = merge({}, state);
            delete newstate[action.videoId];
            return newstate;
        default:
            return state;
    }
};