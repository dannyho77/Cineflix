import * as APIUtil from '../utils/mylists';

export const RECEIVE_MYLISTS = 'RECEIVE_MYLISTS';
export const ADD_MYLIST = 'ADD_MYLIST';
export const REMOVE_MYLIST = 'REMOVE_MYLIST';

export const receiveMyLists = mylists => ({
    type: RECEIVE_MYLISTS,
    mylists
})

export const addMyList = movieId => ({
    type: ADD_MYLIST,
    movieId
})

export const removeMyList = movieId => ({
    type: REMOVE_MYLIST,
    movieId
})

export const fetchMyLists = () => dispatch => (
    APIUtil.fetchLists().then(mylists => (
      dispatch(receiveMyLists(mylists))
    ))
  );
  
  export const addToMyList = movieId => dispatch => (
    APIUtil.postList(movieId).then(movie => (
      dispatch(addMyList(movie))
    ))
  );

  export const removeFromMyList = id => dispatch => (
    APIUtil.deleteList(id).then(movieId => (
      dispatch(removeMyList(movieId))
    ))
  );