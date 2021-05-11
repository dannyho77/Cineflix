import { RECEIVE_GENRE, RECEIVE_GENRES } from '../actions/genres';

export default (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_GENRE:
            return Object.assign({}, state, { [action.genre.id]: action.genre });
        case RECEIVE_GENRES:
            return action.genres;
        default:
            return state;
    }
};