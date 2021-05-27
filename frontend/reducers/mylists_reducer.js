import * as Actions from '../actions/mylists';

export default (state = {}, action) => {
    Object.freeze(state);

    let nextstate = Object.assign({}, state);

    switch (action.type){
        case Actions.RECEIVE_MYLISTS:
            return action.mylists;
        case Actions.ADD_MYLIST:
            const idx = Object.keys(action.mylist)[0];
            nextstate[idx] = action.mylist[idx];
            return nextstate;
        case Actions.REMOVE_MYLIST:
            delete nextstate[Object.keys(action.mylist)[0]];
            return nextstate;
        default:
            return state;
    }
};