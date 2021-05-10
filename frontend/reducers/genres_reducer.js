import { RECEIVE_GENRE } from '../actions/genres';

export default (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_GENRE:
            return Object.assign({}, state, { [action.genre.id]: action.genre });
        default:
            return state;
    }
};