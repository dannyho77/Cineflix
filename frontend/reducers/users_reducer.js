import { RECEIVE_CURRENT_USER } from '../actions/session';


export default (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            // debugger
            return Object.assign({}, state, {[action.user.id]: action.user});
        default:
            return state;
    }
};